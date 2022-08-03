const hre = require("hardhat");

async function deployPaymentSplitter() {
  const PaymentSplitter = await hre.ethers.getContractFactory(
    "PaymentSplitter"
  );
  const paymentSplitter = await PaymentSplitter.deploy();
  await paymentSplitter.deployed();
  console.log("Payment Splitter deployed to:", paymentSplitter.address);

  return paymentSplitter.address;
}

module.exports = deployPaymentSplitter;
