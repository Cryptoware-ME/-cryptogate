import React from "react";
import {
  writeContractCall,
  ContractABIUnit,
  EvmAddress,
} from "@cryptogate/react-providers";
import Loader from "../../Loader";
import "./WriteMethodComponent.module.css";

const WriteMethodComponent = ({
  method,
  contractObj,
  methodData,
  gasPrice,
  gasLimit,
}: {
  method: ContractABIUnit;
  contractObj: {
    address: EvmAddress;
    abi: ContractABIUnit[];
  };
  methodData?: {
    [name: string]: { description: string; gasLimit: number };
  };
  gasPrice?: string;
  gasLimit?: number;
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { send, state } = writeContractCall({
    address: contractObj.address,
    abi: contractObj.abi,
    method: method.name,
  });

  React.useEffect(() => {
    if (state.status == "PendingSignature" || state.status == "Mining")
      setIsLoading(true);
    else setIsLoading(false);
  }, [state]);

  const extractErrorMessage = (msg: string) => {
    if (msg.startsWith("sending a transaction requires a signer"))
      return "Authentication error: Connect wallet to send a transaction";
    else if (msg.includes("Ownable: caller is not the owner"))
      return "Authorization error: Function can only be called by contract owner";
    else return msg;
  };

  const queryContract = async (e: any, method: any) => {
    e.preventDefault();
    let args: any = [];
    let options: any = {};
    if (method.inputs && method.inputs.length) {
      method.inputs.map((input: any) =>
        args.push(
          (
            document.getElementById(
              method.name + "-" + input.name
            ) as HTMLInputElement
          )?.value
        )
      );
    }
    options.gasPrice =
      gasPrice ??
      (document.getElementById(method.name + "-gasPrice") as HTMLInputElement)
        ?.value;

    options.gasLimit =
      methodData && methodData[method.name] && methodData[method.name].gasLimit
        ? methodData[method.name].gasLimit
        : gasLimit ??
          (
            document.getElementById(
              method.name + "-gasLimit"
            ) as HTMLInputElement
          )?.value;

    send(args, options);
  };

  return (
    <form
      method="POST"
      onSubmit={(e) => queryContract(e, method)}
      className="methodComponent"
    >
      <h1>{method.name}</h1>
      {methodData && methodData[method.name] ? (
        <p>{methodData[method.name].description}</p>
      ) : (
        <></>
      )}
      {method.inputs &&
        method.inputs.map((input, index) => (
          <input
            key={index}
            id={`${method.name}-${input.name}`}
            placeholder={input.name}
            required
          />
        ))}
      {!gasPrice && (
        <input id={`${method.name}-gasPrice`} placeholder="gasPrice" required />
      )}
      {(!methodData ||
        !methodData[method.name] ||
        !methodData[method.name].gasLimit) &&
        !gasLimit && (
          <input
            id={`${method.name}-gasLimit`}
            placeholder="gasLimit"
            required
          />
        )}
      <button type="submit">Query</button> <br /> <br />
      {isLoading && <Loader />}
      {!isLoading && state.errorMessage ? (
        <span className="error">
          {extractErrorMessage(state.errorMessage.toString())}
        </span>
      ) : (
        <></>
      )}
    </form>
  );
};

export default WriteMethodComponent;
