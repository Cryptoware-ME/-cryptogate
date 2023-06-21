import * as ethers from "ethers";
import { ContractABIUnit, EvmAddress } from "../models/types";
import { TransactionResponse, TransactionReceipt } from "@ethersproject/abstract-provider";
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
export declare const readContractCall: ({ abi, address, contract, method, args, enabled, }: GetContractCallParams) => {
    response: any;
    error: any;
};
/**
 * @public
 * @param {GetContractCallParams[]} params
 * @return {any[]} Call response
 */
export declare const readContractCalls: (params: GetContractCallParams[]) => any[];
interface PostContractCallParams {
    abi?: ContractABIUnit[] | ethers.ContractInterface;
    address?: EvmAddress;
    contract?: string;
    method: string;
}
declare type optionsType = {
    gasLimit?: Number;
    gasPrice?: string;
    nounce?: Number;
    value?: string;
    chainId?: Number;
};
declare type TransactionState = "None" | "PendingSignature" | "Mining" | "Success" | "Fail" | "Exception";
declare type TransactionStatus = {
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
export declare const writeContractCall: ({ abi, address, contract, method, }: PostContractCallParams) => {
    send: (args?: any[], options?: optionsType) => void;
    state: TransactionStatus;
    events: LogDescription[] | undefined;
    resetState: () => void;
};
interface DeployContractParams {
    abi: ContractABIUnit[] | ethers.ContractInterface;
    byteCode: any;
    args?: any;
}
/**
 * @public
 */
export declare const useContract: () => {
    deployContract: ({ abi, byteCode, args, }: DeployContractParams) => Promise<ethers.ethers.Contract>;
};
export {};
