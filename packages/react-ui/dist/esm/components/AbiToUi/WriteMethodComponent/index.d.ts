/// <reference types="react" />
import { ContractABIUnit, EvmAddress } from "@cryptogate/react-providers";
import "./WriteMethodComponent.module.css";
declare const WriteMethodComponent: ({ method, contractObj, descriptions, gasPrice, gasLimit, }: {
    method: ContractABIUnit;
    contractObj: {
        address: EvmAddress;
        abi: ContractABIUnit[];
        descriptions?: any;
        gasPrice?: string | undefined;
        gasLimit?: string | undefined;
    };
}) => JSX.Element;
export default WriteMethodComponent;
