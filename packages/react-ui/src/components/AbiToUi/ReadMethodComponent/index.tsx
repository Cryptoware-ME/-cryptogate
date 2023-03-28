import React from "react";
import { readContractCall, ContractABIUnit, EvmAddress } from "@cryptogate/react-providers";
import Loader from "../../Loader";
import "./ReadMethodComponent.module.css";

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

  const queryContract = async (e: any, method: any) => {
    e.preventDefault();
    setLoading(true);
    let args: any = [];
    if (method.inputs && method.inputs.length) {
      method.inputs.map((input: any) =>
        args.push(
          (document.getElementById(method.name + "-" + input.name) as HTMLInputElement)?.value
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
      {methodData && methodData[method.name] ? <p>{methodData[method.name].description}</p> : <></>}
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
