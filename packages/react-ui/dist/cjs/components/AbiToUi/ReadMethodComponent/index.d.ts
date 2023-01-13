/// <reference types="react" />
import { ContractABIUnit, EvmAddress } from "@cryptogate/react-providers";
import "./ReadMethodComponent.module.css";
declare const ReadMethodComponent: ({ method, contractObj, descriptions, }: {
    method: ContractABIUnit;
    contractObj: {
        address: EvmAddress;
        abi: ContractABIUnit[];
    };
    descriptions?: any;
}) => JSX.Element;
export default ReadMethodComponent;
