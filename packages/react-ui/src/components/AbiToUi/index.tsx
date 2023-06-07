import React from "react";
import {
  ContractABIUnit,
  EvmAddress,
  useConfig,
  useEthereum,
} from "@cryptogate/react-providers";
import ReadMethodComponent from "./ReadMethodComponent";
import WriteMethodComponent from "./WriteMethodComponent";
// import styles from "./AbiToUi.module.css";
/**

AbiToUi component for displaying and interacting with contract methods.
@component
@param {Object} props - The component props.
@param {string} [props.contract] - The contract name.
@param {EvmAddress} [props.address] - The contract address.
@param {ContractABIUnit[]} [props.abi] - The contract ABI.
@param {Object.<string, { description: string, gasLimit: number }>} [props.methodData] - Additional data for the methods.
@param {string} [props.gasPrice] - The gas price for transactions.
@param {number} [props.gasLimit] - The gas limit for transactions.
@returns {JSX.Element} The rendered component.
@example
<AbiToUi
contract="MyContract"
address="0x123456789..."
abi={contractABI}
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

export const AbiToUi = ({
  contract,
  address,
  abi,
  methodData,
  gasPrice,
  gasLimit,
}: {
  contract?: string;
  address?: EvmAddress;
  abi?: ContractABIUnit[];
  methodData?: {
    [name: string]: { description: string; gasLimit: number };
  };
  gasPrice?: string;
  gasLimit?: number;
}) => {
  const [contractObj, setContractObj] = React.useState<{
    address: EvmAddress;
    abi: ContractABIUnit[];
  }>();
  const [type, setType] = React.useState(0);
  const [searched, setSearched] = React.useState("");
  const { network } = useEthereum();
  const config = useConfig();
  /**

Retrieves the ABI for a contract address from Etherscan.
@param {string} contractAddress - The contract address.
@returns {Promise<ContractABIUnit[] | null>} - The retrieved ABI or null if not found.
*/
  const getAbiFromEtherscan = async (contractAddrss: string) => {
    const res = await fetch(
      "https://api.etherscan.io/api?module=contract&action=getabi&address=" +
        contractAddrss +
        "&apikey=9KQ18R3W737H1R2S37HZIEDPWT6RIJJ9I8",
      { method: "GET" }
    );
    const response = await res.json();
    if (response.status != "1") return null;
    return JSON.parse(await response.result);
  };
  /**

Handles the search input change event.
@param {Event} e - The event object.
@returns {void}
*/
  const handleSearch = (e: any) => {
    setSearched(e.target.value);
  };

  React.useEffect(() => {
    if (contract && config && network) {
      const _contractObj = config?.ethConfig?.contractList?.filter(
        (item, _) => item.name == contract
      );
      if (_contractObj && _contractObj.length) {
        const res = Object.keys(_contractObj[0].addresses).filter(
          (key, _) => key == network?.chainId?.toString()
        );
        setContractObj({
          address: _contractObj[0].addresses[Number(res[0])],
          abi: _contractObj[0].abi,
        });
      }
    } else if (address && abi) setContractObj({ address, abi });
    else if (address) {
      getAbiFromEtherscan(address).then((abi) => {
        if (abi) setContractObj({ address, abi });
        else
          console.error(
            "Failed to retrieve contract abi from etherscan. Verify your code to make it retrievable"
          );
      });
    } else console.error("Insufficient data");
  }, [network, config]);

  return (
    <>
      {contractObj && contractObj.abi && (
        <>
          <form className="radioToolbar">
            <div>
              <input
                type="radio"
                id="read"
                name="type"
                defaultChecked
                onChange={(_) => setType(0)}
              />
              <label htmlFor="read">Read</label>
              <input
                type="radio"
                id="write"
                name="type"
                onChange={(_) => setType(1)}
              />
              <label htmlFor="write">Write</label>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="searchBar"
              onChange={handleSearch}
            />
          </form>
          {type == 0 &&
            contractObj.abi
              .filter(
                (item) =>
                  item.type == "function" &&
                  item.stateMutability == "view" &&
                  item.name.includes(searched)
              )
              .map((method, index) => (
                <ReadMethodComponent
                  key={index}
                  method={method}
                  contractObj={contractObj}
                  methodData={methodData}
                />
              ))}
          {type == 1 &&
            contractObj.abi
              .filter(
                (item) =>
                  item.type == "function" &&
                  item.stateMutability != "view" &&
                  item.name.includes(searched)
              )
              .map((method, index) => (
                <WriteMethodComponent
                  key={index}
                  method={method}
                  contractObj={contractObj}
                  methodData={methodData}
                  gasPrice={gasPrice}
                  gasLimit={gasLimit}
                />
              ))}
        </>
      )}
    </>
  );
};
