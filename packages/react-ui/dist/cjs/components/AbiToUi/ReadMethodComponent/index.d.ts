import { ContractABIUnit, EvmAddress } from "@cryptogate/react-providers";
import "./ReadMethodComponent.module.css";
declare const ReadMethodComponent: ({ method, contractObj, methodData, }: {
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
}) => JSX.Element;
export default ReadMethodComponent;
