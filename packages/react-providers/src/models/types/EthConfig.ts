import { EvmWallets } from "../../constants/wallets";
import { Chain } from "./Chain";
import { EvmAddress } from "./common";
/**

Type definition for Ethereum node URLs.
@type {NodeUrls}
*/
export type NodeUrls = {
  [chainId: number]: string;
};
/**

Type definition for Ethereum contract input/output.
@type {ContractIO}
*/
export type ContractIO = {
  internalType: string;
  name: string;
  type: string;
};
/**

Type definition for Ethereum contract ABI unit.
@type {ContractABIUnit}
*/
export type ContractABIUnit = {
  inputs: ContractIO[];
  name: string;
  outputs: ContractIO[];
  stateMutability: string;
  type: string;
};
/**

Type definition for an Ethereum contract.
@type {EthContract}
*/
export type EthContract = {
  name: string;
  abi: ContractABIUnit[];
  addresses: { [chainId: number]: EvmAddress };
};
/**

Type definition for Ethereum configuration.
@type {EthConfig}
*/
export type EthConfig = {
  defaultNetwork: Chain | undefined;
  allowedNetworks?: (Chain | undefined)[];
  readOnlyUrls: NodeUrls;
  wallets: EvmWallets[];
  contractList?: EthContract[];
};
