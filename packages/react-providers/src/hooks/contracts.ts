import React from "react";
import { useConfig, useEvmNode, useErrorsBag } from "../providers";
import * as ethers from "ethers"
import { EthContract, EvmAddress } from "../models/types";
import { useEthereum } from "./ethereum";

type GetContractCallParams = {
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

    const callFunction = async (contract: any, name: string, args?: any[]) => {
        try {
            const res = args ? await contract[name](...args) : await contract[name]();
            setResponse(res.toString())
        } catch (err) {
            addError(err)
        }
    }

    React.useEffect(() => {
        setResponse(undefined)
        if (provider) {
            if (enabled) {
                if (abi && address) {
                    let contractObj = new ethers.Contract(
                        address,
                        abi,
                        provider
                    );
                    callFunction(contractObj, method, args)
                }
                else if (ethConfig) {
                    const { contractList } = ethConfig
                    if (contractList) {
                        const contracts = contractList.filter((_contract) => _contract.name == contract)
                        if (contracts && contracts.length) {
                            try {
                                let contractObj = new ethers.Contract(
                                    contracts[0].addresses[network.chainId],
                                    contracts[0].abi,
                                    provider
                                );
                                const methods = contractList[0].abi.filter(
                                    (_method: any) =>
                                        _method.type == "function" && _method.stateMutability == "view" && _method.name == method
                                )
                                if (methods && methods.length) {
                                    if (!methods[0].inputs || methods[0].inputs.length == 0)
                                        callFunction(contractObj, method)
                                    else if (args && args.length == methods[0].inputs.length)
                                        callFunction(contractObj, method, args)
                                    else addError(`Incorrect number of arguments`)
                                } else
                                    addError(`Contract method ${method} doesn't exist in contract ${contract}`)
                            } catch (err) { addError(err) }
                        } else
                            addError(`Contract ${contract} doesn't exist in your config`)
                    }
                }
            }
        }
        else addError("No provider available")
    }, [ethConfig, enabled])

    return response
}

export const readContractCalls = (params: GetContractCallParams[]) => {
    const { ethConfig } = useConfig()
    const { provider } = useEvmNode()
    const { addError } = useErrorsBag()
    const { network } = useEthereum()
    const [response, setResponse]: [any, React.Dispatch<React.SetStateAction<any>>] = React.useState<any>([])

    const callFunction = async (contract: any, name: string, args?: any[]) => {
        try {
            const res = args ? await contract[name](...args) : await contract[name]();
            return res
        } catch (err) {
            addError(err)
        }
    }

    React.useEffect(() => {
        setResponse(undefined)
        if (provider) {
            const res = params.map(async (param) => {
                if (param.abi && param.address) {
                    let contractObj = new ethers.Contract(
                        param.address,
                        param.abi,
                        provider
                    );
                    return await callFunction(contractObj, param.method, param.args)
                }
                else if (ethConfig) {
                    const { contractList } = ethConfig
                    if (contractList) {
                        const contracts = contractList.filter((_contract) => _contract.name == param.contract)
                        if (contracts && contracts.length) {
                            try {
                                let contractObj = new ethers.Contract(
                                    contracts[0].addresses[network.chainId],
                                    contracts[0].abi,
                                    provider
                                );
                                const methods = contractList[0].abi.filter(
                                    (_method: any) =>
                                        _method.type == "function" && _method.stateMutability == "view" && _method.name == param.method
                                )
                                if (methods && methods.length) {
                                    if (!methods[0].inputs || methods[0].inputs.length == 0)
                                        callFunction(contractObj, param.method)
                                    else if (param.args && param.args.length == methods[0].inputs.length)
                                        callFunction(contractObj, param.method, param.args)
                                    else addError(`Incorrect number of arguments`)
                                } else
                                    addError(`Contract method ${param.method} doesn't exist in contract ${param.contract}`)
                            } catch (err) { addError(err) }
                        } else
                            addError(`Contract ${param.contract} doesn't exist in your config`)
                    }
                }
            })
            Promise.all(res).then((result) => setResponse(result))
        }
        else addError("No provider available")
    }, [ethConfig])

    return response
}

export const writeContractCall = (params: GetContractCallParams) => {
    const { contract, method, args, enabled } = params;
    const { ethConfig } = useConfig()
    const { network } = useEthereum()
    const { provider } = useEvmNode()
    const { addError } = useErrorsBag()
    const [response, setResponse]: [any, React.Dispatch<React.SetStateAction<any>>] = React.useState<any>(undefined)

    const getContractObj = async (contracts: EthContract[]) => {
        return new ethers.Contract(
            contracts[0].addresses[network.chainId],
            contracts[0].abi,
            provider
        );
    }

    const callFunction = async (contract: any, name: string, args?: any[]) => {
        try {
            // ! Wrap with promise to resolve & reject
            const res = args ? await contract[name](...args) : await contract[name]();
            setResponse(res.toString())
        } catch (err) {
            addError(err)
        }
    }

    React.useEffect(() => {
        setResponse(undefined)
        if (provider) {
            if (ethConfig && enabled) {
                const { contractList } = ethConfig
                if (contractList) {
                    const contracts = contractList.filter((_contract) => _contract.name == contract)
                    if (contracts && contracts.length > 0) {
                        const methods = contractList[0].abi.filter(
                            (_method: any) =>
                                _method.type == "function" && _method.name == method
                        )
                        if (methods && methods.length > 0) {
                            getContractObj(contracts).then((contractObj) => {
                                if (!methods[0].inputs || methods[0].inputs.length == 0)
                                    callFunction(contractObj, method)
                                else if (args && args.length == methods[0].inputs.length)
                                    callFunction(contractObj, method, args)
                                else addError(`Incorrect number of arguments`)
                            })
                        } else
                            addError(`Contract method ${method} doesn't exist in contract ${contract}`)
                    } else
                        addError(`Contract ${contract} doesn't exist in your config`)
                }
            }
        } else addError("No provider available")
    }, [ethConfig, enabled])

    return response
}

// export const getContractCall = (method: string) => {
//     const { ethConfig } = useConfig()
//     const [contracts, setContracts] = React.useState<EthContract[]>()
//     const [methods, setMethods] = React.useState<ContractMethod>()

//     React.useEffect(() => {
//         if (ethConfig) {
//             const { contractList } = ethConfig
//             setContracts(contractList)
//         }
//     }, [ethConfig])

//     React.useEffect(() => {
//         if (contracts) {
//             let provider = new ethers.providers.JsonRpcProvider(
//                 "https://goerli.infura.io/v3/98d5cf1c763f4224afa492b70366effa"
//             );
//             let contract = new ethers.Contract(
//                 contracts[0].addresses[5],
//                 contracts[0].abi,
//                 provider
//             );
//             let methodsObj: ContractMethod = {};
//             contracts[0].abi.filter(
//                 (item: any) =>
//                     item.type == "function"
//             ).map((method: any) => {
//                 methodsObj[method.name] = (params: any) => {
//                     return new Promise(async (resolve, reject) => {
//                         let tx = await contract[`${method.name}`](...params);
//                         console.log(tx)
//                         resolve
//                         /// listen to TX, when TX done
//                         /// call resolve or reject
//                     })
//                 }
//             })
//             setMethods(methodsObj)
//         }
//     }, [contracts])

//     return methods


//     // let contract = new ethers.Contract(
//     //     args.address,
//     //     Spartan721A.abi,
//     //     provider
//     // );
// }