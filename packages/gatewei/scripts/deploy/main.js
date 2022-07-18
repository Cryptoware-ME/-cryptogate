const hre = require("hardhat");
const deployPaymentSplitter = require('./paymentSplitter.js');
const deployPaymentFactory = require('./paymentFactory.js');

async function main() {
  await hre.run("compile");
  const [owner, _] = await hre.ethers.getSigners();
  const paymentSplitterAddress = await deployPaymentSplitter()

  const paymentFactoryAddress = await deployPaymentFactory(
    owner.address,
    paymentSplitterAddress
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
