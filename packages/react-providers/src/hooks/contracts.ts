import React, { useCallback } from "react";
import { useConfig, useErrorsBag } from "../providers";
import * as ethers from "ethers"
import { ContractABIUnit, EvmAddress } from "../models/types";
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
    const { ethConfig: { contractList } } = useConfig()
    const { addError } = useErrorsBag()
    const { network, provider } = useEthereum()

    const [response, setResponse]: [any, React.Dispatch<React.SetStateAction<any>>] = React.useState<any>(undefined)
    const [error, setError]: [any, React.Dispatch<React.SetStateAction<any>>] = React.useState<any>(undefined)

    const callFunction = React.useCallback(async (contract: any, args?: any[]) => {
        try {
            const res = args ? await contract[method](...args) : await contract[method]();
            setResponse(res.toString())
        } catch (err) {
            setError(err)
            addError(err)
        }
    }, [method])

    React.useEffect(() => {
        if (provider) {
            if (enabled) {
                let _abi: ethers.ContractInterface | ContractABIUnit[] | undefined = undefined;
                let _address: EvmAddress | undefined = undefined;
                if (abi && address) {
                    _abi = abi;
                    _address = address
                }
                else if (contractList) {
                    const contracts = contractList.filter((_contract) => _contract.name == contract)
                    if (contracts && contracts.length) {
                        _abi = contracts[0].abi;
                        _address = contracts[0].addresses[network.chainId]
                    } else {
                        setError(`Contract ${contract} doesn't exist in your config`);
                        addError(`Contract ${contract} doesn't exist in your config`)
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
    }, [provider, contractList, enabled, args])

    return { response, error }
}

export const readContractCalls = (params: GetContractCallParams[]) => {
    const { ethConfig: { contractList } } = useConfig()
    const { addError } = useErrorsBag()
    const { network, provider } = useEthereum()

    const [response, setResponse]: [any[], React.Dispatch<React.SetStateAction<any[]>>] = React.useState<any>([])

    const callFunction = async (contract: any, name: string, args?: any[]) => {
        try {
            const res = args ? await contract[name](...args) : await contract[name]();
            return res
        } catch (err) { addError(err) }
    }

    React.useEffect(() => {
        if (provider) {
            let _abi: ethers.ContractInterface | ContractABIUnit[] | undefined = undefined;
            let _address: EvmAddress | undefined = undefined;
            const res = params.map((param) => {
                if (param.abi && param.address) {
                    _abi = param.abi;
                    _address = param.address
                }
                else if (contractList) {
                    const contracts = contractList.filter((_contract) => _contract.name == param.contract)
                    if (contracts && contracts.length) {
                        _abi = contracts[0].abi;
                        _address = contracts[0].addresses[network.chainId]
                    } else addError(`Contract ${param.contract} doesn't exist in your config`)


                }
                if (_abi && _address) {
                    try {
                        const contractObj = new ethers.Contract(
                            _address,
                            _abi,
                            provider
                        );
                        return callFunction(contractObj, param.method, param.args)
                    } catch (err) { addError(err) }
                }
            })
            Promise.all(res).then((result) => setResponse(result))
        }
        else addError("No provider available")
    }, [provider, contractList])

    return response
}

interface PostContractCallParams {
    abi?: ethers.ContractInterface
    address?: EvmAddress
    contract?: string,
    method: string,
}

export const writeContractCall = ({ abi, address, contract, method }: PostContractCallParams) => {
    const { ethConfig: { contractList } } = useConfig()
    const { addError } = useErrorsBag()
    const { network, provider } = useEthereum()

    const [contractObj, setContractObj]: [ethers.Contract | undefined, React.Dispatch<React.SetStateAction<ethers.Contract | undefined>>] = React.useState()
    const [loading, setLoading]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = React.useState(false)
    const [response, setResponse]: [any, React.Dispatch<React.SetStateAction<any>>] = React.useState(undefined)
    const [error, setError]: [any, React.Dispatch<React.SetStateAction<any>>] = React.useState(undefined)

    const send = useCallback(async (_contractObj: ethers.Contract | undefined, args?: any) => {
        if (_contractObj) {
            setLoading(true)
            try {
                const res = args ? await _contractObj[method](...args) : await _contractObj[method]();
                setResponse(res.toString())
                setLoading(false)
            } catch (err) {
                setError(err)
                addError(err)
                setLoading(false)
            }
        }
    }, [method])

    React.useEffect(() => {
        if (provider) {
            let _abi: ethers.ContractInterface | ContractABIUnit[] | undefined = undefined;
            let _address: EvmAddress | undefined = undefined;
            if (abi && address) {
                _abi = abi;
                _address = address
            }
            else if (contractList) {
                const contracts = contractList.filter((_contract) => _contract.name == contract)
                if (contracts && contracts.length) {
                    _abi = contracts[0].abi;
                    _address = contracts[0].addresses[network.chainId]
                } else {
                    setError(`Contract ${contract} doesn't exist in your config`);
                    addError(`Contract ${contract} doesn't exist in your config`)
                }

            }
            if (_abi && _address) {
                try {
                    const signer = provider.getSigner()
                    const _contractObj = new ethers.Contract(_address, _abi, signer)
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
    }, [provider, contractList])

    return {
        send: (args?: any) => { send(contractObj, args) },
        loading,
        response,
        error
    }
}