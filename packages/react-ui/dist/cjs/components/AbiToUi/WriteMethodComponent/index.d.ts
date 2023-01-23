/// <reference types="react" />
import { ContractABIUnit, EvmAddress } from "@cryptogate/react-providers";
import "./WriteMethodComponent.module.css";
declare const WriteMethodComponent: ({ method, contractObj, methodData, gasPrice, gasLimit, }: {
    method: ContractABIUnit;
    contractObj: {
        address: EvmAddress;
        abi: ContractABIUnit[];
    };
    methodData?: {
        [name: string]: {
            description: string;
            gasLimit: number;
        };
    } | undefined;
    gasPrice?: string | undefined;
    gasLimit?: number | undefined;
}) => JSX.Element;
export default WriteMethodComponent;
