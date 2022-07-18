const hre = require("hardhat");

async function main() {
  await hre.run("compile");
  const [owner, _] = await hre.ethers.getSigners();

  // We get the contract to deploy
  const PaymentSplitter = await hre.ethers.getContractFactory(
    "PaymentSplitter"
  );
  const paymentSplitter = await PaymentSplitter.deploy();
  await paymentSplitter.deployed();
  console.log("Payment Splitter deployed to:", paymentSplitter.address);

  const PaymentFactory = await hre.ethers.getContractFactory("PaymentFactory");
  const paymentFactory = await PaymentFactory.deploy(
    paymentSplitter.address,
    "1000",
    owner.address
  );
  await paymentFactory.deployed();
  console.log("Payment Factory deployed to:", paymentFactory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
