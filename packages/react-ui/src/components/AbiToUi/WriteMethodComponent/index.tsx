import React from "react";
import {
  writeContractCall,
  ContractABIUnit,
  EvmAddress,
} from "@cryptogate/react-providers";
import Loader from "../../Loader";
import "./WriteMethodComponent.module.css";

/**

* @function WriteMethodComponent
* @param props - component props
* @param  props.method - ContractABIUnit object representing the method to be called
* @param  props.contractObj - object containing the contract address and ABI
* @param  props.descriptions - optional object containing descriptions for the methods
* @returns  a form for calling write methods on a smart contract
*/
const WriteMethodComponent = ({
  method,
  contractObj,
  descriptions,
}: {
  method: ContractABIUnit;
  contractObj: {
    address: EvmAddress;
    abi: ContractABIUnit[];
    descriptions?: any;
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

  /**
 *
  * @param props.contractObj.address - The address of the contract
  * @param props.contractObj.abi - The abi of the contract
  * This component is used to call a write method of a smart contract. 
  * It takes in the method to be called and the contract object containing its address and ABI. It also takes in an optional descriptions object that contains the description of the method. It uses the writeContractCall hook from @cryptogate/react-providers to call the method and handle the response and errors.
 */
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
      <input id={`${method.name}-gasPrice`} placeholder="gasPrice" required />
      <input id={`${method.name}-gasLimit`} placeholder="gasLimit" required />
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
