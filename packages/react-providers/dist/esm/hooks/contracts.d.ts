import * as ethers from "ethers";
import { ContractABIUnit, EvmAddress } from "../models/types";
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
export declare const readContractCall: ({ abi, address, contract, method, args, enabled }: GetContractCallParams) => {
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
/**
 * @public
 * @param {PostContractCallParams} ContractCallObject
 * @return send, loading, response & error
*/
export declare const writeContractCall: ({ abi, address, contract, method }: PostContractCallParams) => {
    send: (args?: any[], options?: optionsType) => void;
    loading: boolean;
    response: any;
    error: any;
};
export {};
