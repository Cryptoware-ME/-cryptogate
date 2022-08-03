const hre = require("hardhat");

const deployPaymentSplitter = require("./paymentSplitter.js");
const deployPaymentFactory = require("./paymentFactory.js");

async function main() {
  await hre.run("compile");
  const owner = await hre.ethers.getSigner(
    "0xFDc4bbC7b67E19BfCd13B25F3De778d7C7Fba867"
  );
  const paymentSplitterAddress = await deployPaymentSplitter(owner);

  const paymentFactoryAddress = await deployPaymentFactory(
    owner,
    paymentSplitterAddress
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
