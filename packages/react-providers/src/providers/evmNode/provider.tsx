import React from "react";
import { EvmNodeContext } from "./context";
import { NodeUrls } from "../../models/types";
import { providers } from "ethers";
import { useNetwork } from "../network";

interface Props {
  children: React.ReactNode;
  readOnlyUrls?: NodeUrls;
}
/**

Provider component for managing the Ethereum Virtual Machine (EVM) node connection.
@component
@param {Props} props - The component props.
@param {React.ReactNode} props.children - The child components.
@param {NodeUrls} [props.readOnlyUrls] - The read-only URLs for different chain IDs.
@returns {JSX.Element} The rendered component.
@example
<EvmNodeProvider readOnlyUrls={readOnlyUrls}>
<App />
</EvmNodeProvider>
*/
export function EvmNodeProvider({ children, readOnlyUrls }: Props) {
  const [provider, setProvider]: [
    providers.JsonRpcProvider | providers.Web3Provider | undefined,
    React.Dispatch<
      React.SetStateAction<providers.JsonRpcProvider | providers.Web3Provider | undefined>
    >
  ] = React.useState();
  const { networkData } = useNetwork();

  React.useEffect(() => {
    if (!provider && readOnlyUrls && networkData?.chainId && readOnlyUrls[networkData.chainId]) {
      let _provider = new providers.JsonRpcProvider(readOnlyUrls[networkData.chainId]);
      setProvider(_provider);
    }
  }, [networkData, readOnlyUrls]);

  return <EvmNodeContext.Provider value={{ provider, setProvider }} children={children} />;
}
