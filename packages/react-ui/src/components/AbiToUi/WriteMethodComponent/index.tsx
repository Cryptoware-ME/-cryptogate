import React from "react";
import {
  writeContractCall,
  ContractABIUnit,
  EvmAddress,
} from "@cryptogate/react-providers";
import Loader from "../../Loader";
import "./WriteMethodComponent.module.css";

/**

Component for writing contract methods and executing transactions.
@component
@param {Object} props - The component props.
@param {ContractABIUnit} props.method - The ABI unit for the method.
@param {Object} props.contractObj - The contract object containing the address and ABI.
@param {Object} [props.methodData] - Additional data for the method.
@param {Object.<string, { description: string, gasLimit: number }>} props.methodData[name] - Data specific to a method name.
@param {string} [props.gasPrice] - The gas price for the transaction.
@param {number} [props.gasLimit] - The gas limit for the transaction.
@returns {JSX.Element} The rendered component.
@example
<WriteMethodComponent
method={method}
contractObj={{
address: "0x123456789...",
abi: contractABI,
}}
methodData={{
methodName: {
  description: "This method does...",
  gasLimit: 500000,
},
}}
gasPrice="1000000000"
gasLimit={200000}
/>
*/

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
  const [isLoading, setLoading] = React.useState(false);
  const { send, loading, error, response } = writeContractCall({
    address: contractObj.address,
    abi: contractObj.abi,
    method: method.name,
  });

  React.useEffect(() => {
    if (response || error) setLoading(false);
  }, [response, error]);
  /**

Extracts the error message from a given string.
@param {string} msg - The error message string.
@returns {string} - The extracted error message.
*/
  const extractErrorMessage = (msg: string) => {
    if (msg.startsWith("sending a transaction requires a signer"))
      return "Authentication error: Connect wallet to send a transaction";
    else if (msg.includes("Ownable: caller is not the owner"))
      return "Authorization error: Function can only be called by contract owner";
    else return msg;
  };
  /**

Query the contract to execute a method and send a transaction.
@param {Event} e - The event object.
@param {ContractABIUnit} method - The method object.
@returns {void}
*/
  const queryContract = async (e: any, method: any) => {
    e.preventDefault();
    setLoading(true);
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
      {!loading && response ? response.toString() : <></>}
      {!isLoading && error ? (
        <span className="error">
          {error.message
            ? extractErrorMessage(error.message.toString())
            : extractErrorMessage(error.toString())}
        </span>
      ) : (
        <></>
      )}
    </form>
  );
};

export default WriteMethodComponent;
