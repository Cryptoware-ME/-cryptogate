import { ContractABIUnit, EvmAddress } from "@cryptogate/react-providers";
export declare const AbiToUi: ({ contract, address, abi, methodData, gasPrice, gasLimit, }: {
    contract?: string | undefined;
    address?: `0x${string}` | undefined;
    abi?: ContractABIUnit[] | undefined;
    methodData?: {
        [name: string]: {
            description: string;
            gasLimit: number;
        };
    } | undefined;
    gasPrice?: string | undefined;
    gasLimit?: number | undefined;
}) => JSX.Element;
