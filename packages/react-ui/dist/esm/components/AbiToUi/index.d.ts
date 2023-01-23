/// <reference types="react" />
import { ContractABIUnit, EvmAddress } from "@cryptogate/react-providers";
export declare const AbiToUi: ({ contract, address, abi, descriptions, gasPrice, gasLimit, }: {
    contract?: string | undefined;
    address?: any;
    abi?: ContractABIUnit[] | undefined;
    descriptions?: any;
    gasPrice?: string | undefined;
    gasLimit?: string | undefined;
}) => JSX.Element;
