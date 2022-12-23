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
}: {
  method: ContractABIUnit;
  contractObj: {
    address: EvmAddress;
    abi: ContractABIUnit[];
  };
}) => {
  const [isLoading, setLoading] = React.useState(false);
  const { send, loading, error, response } = writeContractCall({
    address: contractObj.address,
    abi: contractObj.abi,
    method: method.name,
  });

  React.useEffect(() => {
    if (response || error) setLoading(false);
  }, [response, error]);

  const extractErrorMessage = (msg: string) => {
    if (msg.startsWith("sending a transaction requires a signer"))
      return "Authentication error: Connect wallet to send a transaction";
    else if (msg.includes("Ownable: caller is not the owner"))
      return "Authorization error: Function can only be called by contract owner";
    else return msg;
  };

  const queryContract = async (e: any, method: any) => {
    e.preventDefault();
    setLoading(true);
    let args: any = [];
    let options: any = {};
    if (method.inputs && method.inputs.length) {
      method.inputs.map((input: any) =>
        args.push(
          document.getElementById(method.name + "-" + input.name)?.value
        )
      );
    }
    options.gasPrice = document.getElementById(
      method.name + "-gasPrice"
    )?.value;
    options.gasLimit = document.getElementById(
      method.name + "-gasLimit"
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
      {method.inputs &&
        method.inputs.map((input, index) => (
          <input
            key={index}
            id={`${method.name}-${input.name}`}
            placeholder={input.name}
            required
          />
        ))}
      <input id={`${method.name}-gasPrice`} placeholder="gasPrice" required />
      <input id={`${method.name}-gasLimit`} placeholder="gasLimit" required />
      <button type="submit">Query</button> <br /> <br />
      {isLoading && <Loader />}
      {!loading && response && response.toString()}
      {!isLoading && (
        <span className="error">
          {error && extractErrorMessage(error.message.toString())}
        </span>
      )}
    </form>
  );
};

export default WriteMethodComponent;
