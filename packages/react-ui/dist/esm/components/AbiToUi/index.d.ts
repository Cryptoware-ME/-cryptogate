/// <reference types="react" />
import { ContractABIUnit, EvmAddress } from "@cryptogate/react-providers";
export declare const AbiToUi: ({ contract, address, abi, }: {
    contract?: string | undefined;
    address?: any;
    abi?: ContractABIUnit[] | undefined;
}) => JSX.Element;
