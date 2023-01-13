/// <reference types="react" />
import { ContractABIUnit, EvmAddress } from "@cryptogate/react-providers";
import "./WriteMethodComponent.module.css";
declare const WriteMethodComponent: ({ method, contractObj, descriptions, }: {
    method: ContractABIUnit;
    contractObj: {
        address: EvmAddress;
        abi: ContractABIUnit[];
        descriptions?: any;
    };
}) => JSX.Element;
export default WriteMethodComponent;
