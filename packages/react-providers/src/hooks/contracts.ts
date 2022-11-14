import React from "react";
import { useConfig, useEvmNode, useErrorsBag } from "../providers";
import * as ethers from "ethers"
import { ContractABIUnit, EthContract, EvmAddress } from "../models/types";
import { useEthereum } from "./ethereum";

interface GetContractCallParams {
    abi?: ethers.ContractInterface
    address?: EvmAddress
    contract?: string,
    method: string,
    args?: any[],
    enabled?: boolean
}

export const readContractCall = ({ abi, address, contract, method, args, enabled = true }: GetContractCallParams) => {
    const { ethConfig } = useConfig()
    const { provider } = useEvmNode()
    const { addError } = useErrorsBag()
    const { network } = useEthereum()
    const [response, setResponse]: [any, React.Dispatch<React.SetStateAction<any>>] = React.useState<any>(undefined)
    const [error, setError]: [any, React.Dispatch<React.SetStateAction<any>>] = React.useState<any>(undefined)

    const callFunction = async (contract: any, args?: any[]) => {
        try {
            const res = args ? await contract[method](...args) : await contract[method]();
            setResponse(res.toString())
        } catch (err) {
            setError(err)
            addError(err)
        }
    }

    React.useEffect(() => {
        setResponse(undefined)
        if (provider) {
            if (enabled) {
                let _abi: ethers.ContractInterface | ContractABIUnit[] | undefined = undefined;
                let _address: EvmAddress | undefined = undefined;
                if (abi && address) {
                    _abi = abi;
                    _address = address
                }
                else if (ethConfig) {
                    const { contractList } = ethConfig
                    if (contractList) {
                        const contracts = contractList.filter((_contract) => _contract.name == contract)
                        if (contracts && contracts.length) {
                            _abi = contracts[0].abi;
                            _address = contracts[0].addresses[network.chainId]
                        } else {
                            setError(`Contract ${contract} doesn't exist in your config`);
                            addError(`Contract ${contract} doesn't exist in your config`)
                        }
                    }
                }
                if (_abi && _address) {
                    try {
                        const contractObj = new ethers.Contract(_address, _abi, provider);
                        callFunction(contractObj, args)
                    } catch (err) {
                        setError(err);
                        addError(err)
                    }
                }
            }
        }
        else {
            setError("No provider available");
            addError("No provider available")
        }
    }, [ethConfig, enabled, args])

    return { response, error }
}

// TODO:: TEST IN CONNECT MENU
export const readContractCalls = (params: GetContractCallParams[]) => {
    const { ethConfig } = useConfig()
    const { provider } = useEvmNode()
    const { addError } = useErrorsBag()
    const { network } = useEthereum()
    const [response, setResponse]: [any, React.Dispatch<React.SetStateAction<any>>] = React.useState<any>([])
    const [error, setError]: [any, React.Dispatch<React.SetStateAction<any>>] = React.useState<any>(undefined)

    const callFunction = async (contract: any, name: string, args?: any[]) => {
        try {
            const res = args ? await contract[name](...args) : await contract[name]();
            return res
        } catch (err) {
            setError(err)
            addError(err)
        }
    }

    React.useEffect(() => {
        setResponse(undefined)
        if (provider) {
            let _abi: ethers.ContractInterface | ContractABIUnit[] | undefined = undefined;
            let _address: EvmAddress | undefined = undefined;
            const res = params.map(async (param) => {
                if (param.abi && param.address) {
                    _abi = param.abi;
                    _address = param.address
                }
                else if (ethConfig) {
                    const { contractList } = ethConfig
                    if (contractList) {
                        const contracts = contractList.filter((_contract) => _contract.name == param.contract)
                        if (contracts && contracts.length) {
                            _abi = contracts[0].abi;
                            _address = contracts[0].addresses[network.chainId]
                        } else {
                            setError(`Contract ${param.contract} doesn't exist in your config`)
                            addError(`Contract ${param.contract} doesn't exist in your config`)
                        }
                    }
                }
                if (_abi && _address) {
                    try {
                        const contractObj = new ethers.Contract(
                            _address,
                            _abi,
                            provider
                        );
                        callFunction(contractObj, param.method, param.args)
                    } catch (err) {
                        setError(err)
                        addError(err)
                    }
                }
            })
            Promise.all(res).then((result) => setResponse(result))
        }
        else addError("No provider available")
    }, [ethConfig])

    return { response, error }
}

interface PostContractCallParams {
    abi?: ethers.ContractInterface
    address?: EvmAddress
    contract?: string,
    method: string,
}

export const writeContractCall = ({ abi, address, contract, method }: PostContractCallParams) => {
    const { ethConfig } = useConfig()
    const { addError } = useErrorsBag()
    const { network, provider } = useEthereum()
    const [contractObj, setContractObj]: [ethers.Contract | undefined, React.Dispatch<React.SetStateAction<ethers.Contract | undefined>>] = React.useState()
    const [response, setResponse]: [any, React.Dispatch<React.SetStateAction<any>>] = React.useState(undefined)
    const [error, setError]: [any, React.Dispatch<React.SetStateAction<any>>] = React.useState(undefined)
    const [loading, setLoading]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = React.useState(false)

    const send = async (_contractObj: ethers.Contract | undefined, args?: any) => {
        if (_contractObj) {
            setLoading(true)
            try {
                const res = args ? await _contractObj[method](...args) : await _contractObj[method]();
                setResponse(res.toString())
                setLoading(false)
            } catch (err) {
                setError(err)
                addError(err)
            }
        }
    }

    React.useEffect(() => {
        setResponse(undefined)
        if (provider) {
            let _abi: ethers.ContractInterface | ContractABIUnit[] | undefined = undefined;
            let _address: EvmAddress | undefined = undefined;
            if (abi && address) {
                _abi = abi;
                _address = address
            }
            else if (ethConfig) {
                const { contractList } = ethConfig
                if (contractList) {
                    const contracts = contractList.filter((_contract) => _contract.name == contract)
                    if (contracts && contracts.length) {
                        _abi = contracts[0].abi;
                        _address = contracts[0].addresses[network.chainId]
                    } else {
                        setError(`Contract ${contract} doesn't exist in your config`);
                        addError(`Contract ${contract} doesn't exist in your config`)
                    }
                }
            }
            if (_abi && _address) {
                try {
                    const _contractObj = new ethers.Contract(_address, _abi, provider)
                    setContractObj(_contractObj);
                } catch (err) {
                    setError(err);
                    addError(err)
                }
            }

        }
        else {
            setError("No provider available");
            addError("No provider available")
        }
    }, [ethConfig, provider])

    return {
        send: (args?: any) => { send(contractObj, args) },
        loading,
        response,
        error
    }
}