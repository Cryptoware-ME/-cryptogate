import React from "react";
import { ContractABIUnit, EvmAddress } from "../../../cryptogate/models/types";
import { useConfig, useEthereum } from "../../../cryptogate";
import ReadMethodComponent from "./ReadMethodComponent";
import WriteMethodComponent from "./WriteMethodComponent";
import styles from "./AbiToUi.module.css";

export const AbiToUi = ({
  contract,
  address,
  abi,
}: {
  contract?: string;
  address?: EvmAddress;
  abi?: ContractABIUnit[];
}) => {
  const [contractObj, setContractObj] = React.useState<{
    address: EvmAddress;
    abi: ContractABIUnit[];
  }>();
  const [type, setType] = React.useState(0);
  const { network } = useEthereum();
  const config = useConfig();

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
          <form className={styles.radioToolbar}>
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
          </form>
          {type == 0 &&
            contractObj.abi
              .filter(
                (item) =>
                  item.type == "function" && item.stateMutability == "view"
              )
              .map((method, index) => (
                <ReadMethodComponent
                  key={index}
                  method={method}
                  contractObj={contractObj}
                />
              ))}
          {type == 1 &&
            contractObj.abi
              .filter(
                (item) =>
                  item.type == "function" && item.stateMutability != "view"
              )
              .map((method, index) => (
                <WriteMethodComponent
                  key={index}
                  method={method}
                  contractObj={contractObj}
                />
              ))}
        </>
      )}
    </>
  );
};
