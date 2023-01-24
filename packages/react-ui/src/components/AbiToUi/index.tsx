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
 * A component that renders the ABI of a contract in a user-friendly format.
 *@param contract - The contract name
 *@param address - The address of the contract on the Ethereum network
 *@param abi - The ABI of the contract
 *@param descriptions - Additional information about the contract's methods
 */
export const AbiToUi = ({
  contract,
  address,
  abi,
  descriptions,
}: {
  contract?: string;
  address?: EvmAddress;
  abi?: ContractABIUnit[];
  descriptions?: any;
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
   * Function to fetch the ABI of a contract from Etherscan
   * @param {string} contractAddrss - The address of the contract
   * @returns {Promise<ContractABIUnit[]>} - The ABI of the contract
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

  const handleSearch = (e: any) => {
    setSearched(e.target.value);
  };

  /**

 * useEffect hook to set the contract object state when the component is first rendered or network/config changes
 * If contract and config are present, it filters the contract object from config and sets the contract address based on the current network.
 * @param  config - The configuration object containing the contract list
 * @param network - The current Ethereum network object
*/
  React.useEffect(() => {
    if (contract && config && network) {
      const _contractObj = config?.ethConfig?.contractList?.filter(
        (item, i) => item.name == contract
      );
      if (_contractObj && _contractObj.length) {
        const res = Object.keys(_contractObj[0].addresses).filter(
          (key, i) => key == network.chainId.toString()
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
                onChange={(e) => setType(0)}
              />
              <label htmlFor="read">Read</label>
              <input
                type="radio"
                id="write"
                name="type"
                onChange={(e) => setType(1)}
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
                  descriptions={descriptions}
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
                  descriptions={descriptions}
                />
              ))}
        </>
      )}
    </>
  );
};
