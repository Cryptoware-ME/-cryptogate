import React from "react";
import { useConfig, useErrorsBag } from "../providers";
import * as ethers from "ethers";
import { ContractABIUnit, EvmAddress } from "../models/types";
import { useEthereum } from "./ethereum";
import {
  TransactionResponse,
  TransactionReceipt,
} from "@ethersproject/abstract-provider";
import { LogDescription } from "ethers/lib/utils";
import { ChainId } from "../constants/chains";

interface GetContractCallParams {
  abi?: ContractABIUnit[] | ethers.ContractInterface;
  address?: EvmAddress;
  contract?: string;
  method: string;
  args?: any[];
  enabled?: boolean;
}

/**
 * @public
 * @param {GetContractCallParams} ContractCallObject
 * @return Call response and error
 */
export const readContractCall = ({
  abi,
  address,
  contract,
  method,
  args,
  enabled = true,
}: GetContractCallParams): { response: any; error: any } => {
  const config = useConfig();
  const { addError, clearErrors } = useErrorsBag();
  const { network, provider } = useEthereum();

  const [response, setResponse]: [
    any,
    React.Dispatch<React.SetStateAction<any>>
  ] = React.useState<any>(undefined);
  const [error, setError]: [any, React.Dispatch<React.SetStateAction<any>>] =
    React.useState<any>(undefined);

  const callFunction = React.useCallback(
    async (contract: any, args?: any[]) => {
      console.log("method: ", method);
      try {
        clearErrors();
        setError(undefined);
        const res = args
          ? await contract[method](...args)
          : await contract[method]();
        setResponse(undefined);
        setResponse(res);
      } catch (err) {
        console.log("1************************ ", err);
        setError(err);
        addError(err);
      }
    },
    [method]
  );

  React.useEffect(() => {
    if (provider) {
      clearErrors();
      setError(undefined);
      if (enabled) {
        let _abi: ethers.ContractInterface | ContractABIUnit[] | undefined =
          undefined;
        let _address: EvmAddress | undefined = undefined;
        if (abi && address) {
          _abi = abi;
          _address = address;
        } else if (config?.ethConfig && network?.chainId) {
          clearErrors();
          setError(undefined);
          const contracts = config.ethConfig.contractList?.filter(
            (_contract) => _contract.name == contract
          );
          if (contracts && contracts.length) {
            _abi = contracts[0].abi;
            _address = contracts[0].addresses[network.chainId];
          } else {
            setError(`Contract ${contract} doesn't exist in your config`);
            addError(`Contract ${contract} doesn't exist in your config`);
          }
        }
        if (_abi && _address) {
          console.log("_address: ", _address);
          clearErrors();
          setError(undefined);
          try {
            clearErrors();
            setError(undefined);
            const contractObj = new ethers.Contract(_address, _abi, provider);
            callFunction(contractObj, args);
          } catch (err) {
            setError(err);
            addError(err);
          }
        } else {
          setError(
            `You need to either provide a contract name from your contracts config or a contract address & abi`
          );
          addError(
            `You need to either provide a contract name from your contracts config or a contract address & abi`
          );
        }
      }
    } else {
      setError("No provider available");
      addError("No provider available");
    }
  }, [
    network,
    provider,
    config,
    abi,
    address,
    contract,
    method,
    args,
    enabled,
  ]);

  return { response, error };
};

/**
 * @public
 * @param {GetContractCallParams[]} params
 * @return {any[]} Call response
 */
export const readContractCalls = (params: GetContractCallParams[]): any[] => {
  const config = useConfig();
  const { addError, clearErrors } = useErrorsBag();
  const { network, provider } = useEthereum();

  const [response, setResponse]: [
    any[],
    React.Dispatch<React.SetStateAction<any[]>>
  ] = React.useState<any>([]);

  const callFunction = async (contract: any, name: string, args?: any[]) => {
    try {
      const res = args ? await contract[name](...args) : await contract[name]();
      return res;
    } catch (err) {
      addError(err);
    }
  };

  React.useEffect(() => {
    if (provider) {
      clearErrors();
      let _abi: ethers.ContractInterface | ContractABIUnit[] | undefined =
        undefined;
      let _address: EvmAddress | undefined = undefined;
      const res = params.map((param) => {
        if (param.abi && param.address) {
          _abi = param.abi;
          _address = param.address;
        } else if (config?.ethConfig && network?.chainId) {
          const contracts = config.ethConfig.contractList?.filter(
            (_contract) => _contract.name == param.contract
          );
          if (contracts && contracts.length) {
            clearErrors();
            _abi = contracts[0].abi;
            _address = contracts[0].addresses[network.chainId];
          } else
            addError(`Contract ${param.contract} doesn't exist in your config`);
        }
        if (_abi && _address) {
          clearErrors();
          try {
            clearErrors();
            const contractObj = new ethers.Contract(_address, _abi, provider);
            return callFunction(contractObj, param.method, param.args);
          } catch (err) {
            addError(err);
            return [];
          }
        } else {
          addError(
            `You need to either provide a contract name from your contracts config or a contract address & abi`
          );
          return [];
        }
      });
      Promise.all(res).then((result) => setResponse(result));
    } else addError("No provider available");
  }, [provider, config, params]);

  return response;
};

interface PostContractCallParams {
  abi?: ContractABIUnit[] | ethers.ContractInterface;
  address?: EvmAddress;
  contract?: string;
  method: string;
}

type optionsType = {
  gasLimit?: Number;
  gasPrice?: string;
  nounce?: Number;
  value?: string;
  chainId?: Number;
};

type TransactionState =
  | "None"
  | "PendingSignature"
  | "Mining"
  | "Success"
  | "Fail"
  | "Exception";

type TransactionStatus = {
  status: TransactionState;
  transaction?: TransactionResponse;
  receipt?: TransactionReceipt;
  chainId?: ChainId;
  errorMessage?: string;
  originalTransaction?: TransactionResponse;
};

/**
 * @public
 * @param {PostContractCallParams} ContractCallObject
 * @return send, loading, response & error
 */
export const writeContractCall = ({
  abi,
  address,
  contract,
  method,
}: PostContractCallParams): {
  send: (args?: any[], options?: optionsType) => void;
  state: TransactionStatus;
  events: LogDescription[] | undefined;
  resetState: () => void;
} => {
  const config = useConfig();
  const { network, provider } = useEthereum();

  const [contractObj, setContractObj]: [
    ethers.Contract | undefined,
    React.Dispatch<React.SetStateAction<ethers.Contract | undefined>>
  ] = React.useState();

  const [state, setState]: [
    TransactionStatus,
    React.Dispatch<React.SetStateAction<TransactionStatus>>
  ] = React.useState({
    status: "None",
    chainId: network.chainId,
  } as TransactionStatus);

  const [events, setEvents]: [
    LogDescription[] | undefined,
    React.Dispatch<React.SetStateAction<LogDescription[] | undefined>>
  ] = React.useState();

  const [response, setResponse]: [
    any,
    React.Dispatch<React.SetStateAction<any>>
  ] = React.useState(undefined);

  const resetState = React.useCallback(() => {
    setState({
      status: "None",
    });
  }, [setState]);

  const send = React.useCallback(
    async (
      _contractObj: ethers.Contract | undefined,
      args?: any,
      options?: optionsType
    ) => {
      if (_contractObj) {
        try {
          setState({ status: "PendingSignature", chainId: network.chainId });
          const res = args
            ? options
              ? await _contractObj[method](...args, options)
              : await _contractObj[method](...args)
            : options
            ? await _contractObj[method](options)
            : await _contractObj[method]();
          setResponse(res);
          setState({
            status: "Mining",
            chainId: network.chainId,
            transaction: res,
          });
        } catch (err: any) {
          setState({
            status: "Exception",
            chainId: network.chainId,
            errorMessage: err.toString(),
          });
        }
      }
    },
    [method, network, setState, setResponse]
  );

  const waitResponse = async () => {
    try {
      const receipt = await response.wait();
      setState({
        status: "Success",
        receipt,
        transaction: response,
        chainId: network.chainId,
      });
      if (contractObj && receipt?.logs) {
        const _events = receipt.logs.reduce(
          (accumulatedLogs: any, log: any) => {
            try {
              return log.address.toLowerCase() ===
                contractObj.address.toLowerCase()
                ? [...accumulatedLogs, contractObj.interface.parseLog(log)]
                : accumulatedLogs;
            } catch (_err) {
              return accumulatedLogs;
            }
          },
          [] as LogDescription[]
        );
        setEvents(_events);
      }
    } catch (err: any) {
      setState({
        status: "Fail",
        transaction: response,
        chainId: network.chainId,
        errorMessage: err.toString(),
      });
    }
  };

  React.useEffect(() => {
    if (response) waitResponse();
  }, [response]);

  React.useEffect(() => {
    if (provider) {
      let _abi: ethers.ContractInterface | ContractABIUnit[] | undefined =
        undefined;
      let _address: EvmAddress | undefined = undefined;
      if (abi && address) {
        _abi = abi;
        _address = address;
      } else if (config?.ethConfig && network?.chainId) {
        const contracts = config.ethConfig.contractList?.filter(
          (_contract) => _contract.name == contract
        );
        if (contracts && contracts.length) {
          _abi = contracts[0].abi;
          _address = contracts[0].addresses[network.chainId];
        } else {
          setState({
            status: "Exception",
            chainId: network.chainId,
            errorMessage: `Contract ${contract} doesn't exist in your config`,
          });
        }
      }
      if (_abi && _address) {
        try {
          const signer = provider.getSigner();
          const _contractObj = new ethers.Contract(_address, _abi, signer);
          setContractObj(_contractObj);
        } catch (err: any) {
          setState({
            status: "Exception",
            chainId: network.chainId,
            errorMessage: err.toString(),
          });
        }
      } else {
        setState({
          status: "Exception",
          chainId: network.chainId,
          errorMessage:
            "You need to either provide a contract name from your contracts config or a contract address & abi",
        });
      }
    } else {
      setState({
        status: "Exception",
        chainId: network.chainId,
        errorMessage: "No provider available",
      });
    }
  }, [provider, config]);

  return {
    send: (args?: any[], options?: optionsType) => {
      send(contractObj, args, options);
    },
    state,
    events,
    resetState,
  };
};

interface DeployContractParams {
  abi: ContractABIUnit[] | ethers.ContractInterface;
  byteCode: any;
  args?: any;
}

/**
 * @public
 */
export const useContract = (): {
  deployContract: ({
    abi,
    byteCode,
    args,
  }: DeployContractParams) => Promise<ethers.ethers.Contract>;
} => {
  const { provider } = useEthereum();

  const deployContract = async ({
    abi,
    byteCode,
    args,
  }: DeployContractParams): Promise<ethers.ethers.Contract> => {
    const signer = provider?.getSigner();
    const factory = new ethers.ContractFactory(abi, byteCode, signer);
    const contract = args
      ? await factory.deploy(...args)
      : await factory.deploy();
    return contract;
  };

  return { deployContract };
};
