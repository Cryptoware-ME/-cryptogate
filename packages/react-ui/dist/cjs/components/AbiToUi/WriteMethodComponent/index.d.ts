/// <reference types="react" />
import { ContractABIUnit, EvmAddress } from "@cryptogate/react-providers";
import "./WriteMethodComponent.module.css";
declare const WriteMethodComponent: ({ method, contractObj, }: {
    method: ContractABIUnit;
    contractObj: {
        address: EvmAddress;
        abi: ContractABIUnit[];
    };
}) => JSX.Element;
export default WriteMethodComponent;
