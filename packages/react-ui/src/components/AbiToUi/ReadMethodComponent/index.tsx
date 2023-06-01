import React from "react";
import {
  readContractCall,
  ContractABIUnit,
  EvmAddress,
} from "@cryptogate/react-providers";
import Loader from "../../Loader";
import "./ReadMethodComponent.module.css";

/**

Component for reading contract methods and querying contract data.
@component
@param {Object} props - The component props.
@param {ContractABIUnit} props.method - The ABI unit for the method.
@param {Object} props.contractObj - The contract object containing the address and ABI.
@param {Object} [props.methodData] - Additional data for the method.
@param {Object.<string, { description: string, gasLimit: number }>} props.methodData[name] - Data specific to a method name.
@returns {JSX.Element} The rendered component.
@example
<ReadMethodComponent
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
/>
*/

const ReadMethodComponent = ({
  method,
  contractObj,
  methodData,
}: {
  method: ContractABIUnit;
  contractObj: {
    address: EvmAddress;
    abi: ContractABIUnit[];
  };
  methodData?: {
    [name: string]: { description: string; gasLimit: number };
  };
}) => {
  const [args, setArgs] = React.useState<any[] | undefined>();
  const [enabled, setEnabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { response, error } = readContractCall({
    address: contractObj.address,
    abi: contractObj.abi,
    method: method.name,
    args,
    enabled,
  });

  React.useEffect(() => {
    if (response || error) setLoading(false);
  }, [response, error]);

  /**

Query the contract to retrieve method data.
@param {Event} e - The event object.
@param {ContractABIUnit} method - The method object.
@returns {Promise<void>} - The promise that resolves when the query is completed.
*/
  const queryContract = async (e: any, method: any) => {
    e.preventDefault();
    setLoading(true);
    let args: any = [];
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
      setEnabled(true);
      setArgs(args);
    } else {
      setEnabled(true);
      setArgs([]);
    }
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
      <button type="submit">Query</button> <br /> <br />
      {loading && <Loader />}
      {!loading && response ? response.toString() : <></>}
      {!loading && error ? (
        <span className="error">{error && error.toString()}</span>
      ) : (
        <></>
      )}
    </form>
  );
};

export default ReadMethodComponent;
