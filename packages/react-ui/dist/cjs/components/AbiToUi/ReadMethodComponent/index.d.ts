/// <reference types="react" />
import { ContractABIUnit, EvmAddress } from "@cryptogate/react-providers";
import "./ReadMethodComponent.module.css";
declare const ReadMethodComponent: ({ method, contractObj, }: {
    method: ContractABIUnit;
    contractObj: {
        address: EvmAddress;
        abi: ContractABIUnit[];
    };
}) => JSX.Element;
export default ReadMethodComponent;
