import DappConfig from "./dapp";
// import SolappConfig from "./solapp";
import Connectors from "./connectors";

const stage = 'staging';

const config = {
    Opensea: stage === "staging" ? "testnets." : "",
    WS_BASE_URL: "http://localhost:80/api",
    WS_STORAGE_URL: "http://localhost:80",
    DappConfig: {...DappConfig},
    // SolConfig: SolappConfig,
    Connectors: {...Connectors},
    Ethscan: (stage === "staging" ? "rinkeby." : "") + "etherscan.io/tx/",
};

export default config;
