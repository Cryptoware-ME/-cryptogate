require("@nomiclabs/hardhat-waffle");
const fs = require("fs");

const INFURA_API_KEY = "ced28563ff504eeca880d195dda82166";
const key_TESTNET = fs.readFileSync(".test.secret").toString().trim();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000,
      },
    },
  },
  hardhat: {},
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [key_TESTNET],
    },
  },
};
