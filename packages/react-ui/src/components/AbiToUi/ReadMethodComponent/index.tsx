import React from "react";
import {
  readContractCall,
  ContractABIUnit,
  EvmAddress,
} from "@cryptogate/react-providers";
import Loader from "../../Loader";
import "./ReadMethodComponent.module.css";

/**
* ReadMethodComponent is a functional component that allows for reading data from a smart contract.
* It uses the readContractCall function from the @cryptogate/react-providers library to handle the reading of the contract data.
* It also has the option to display a Loader component while the data is being fetched and to handle the response and error from the readContractCall function.
* @param {ContractABIUnit} method - The method to be called for reading the data.
* @param contractObj - An object containing the address and abi of the smart contract.
* @param descriptions - (optional) Additional data to be used for the component.
*/

const ReadMethodComponent = ({
  method,
  contractObj,
  descriptions,
}: {
  method: ContractABIUnit;
  contractObj: {
    address: EvmAddress;
    abi: ContractABIUnit[];
  };
  descriptions?: any;
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

 * ReadMethodComponent is a functional component that allows for reading data from a smart contract.
 * It uses the readContractCall function from the @cryptogate/react-providers library to handle the reading of the contract data.
 * It also has the option to display a Loader component while the data is being fetched and to handle the response and error from the readContractCall function.
 * The component also includes a form for the user to submit the query for the contract data and for the inputs for the smart contract method.
 * The queryContract function is used to handle the form submission, and it sets the loading state, and it will populate the args state with the input values from the form.
 * The component will return the form with the method name as the title, a description if provided, and inputs for the method's input parameters.
 
 */
  const queryContract = async (e: any, method: any) => {
    e.preventDefault();
    setLoading(true);
    let args: any = [];
    if (method.inputs && method.inputs.length) {
      method.inputs.map((input: any) =>
        args.push(
          document.getElementById(method.name + "-" + input.name)?.value
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
      {descriptions && descriptions[method.name] ? (
        <p>{descriptions[method.name]}</p>
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
