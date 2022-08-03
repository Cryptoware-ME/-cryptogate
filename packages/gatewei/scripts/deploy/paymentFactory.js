const hre = require("hardhat");

async function deployPaymentFactory(
  owner,
  paymentSplitterAddress,
  protocolFee = "10000000000000000"
) {
  const PaymentFactory = await hre.ethers.getContractFactory("PaymentFactory");
  const paymentFactory = await PaymentFactory.deploy(
    paymentSplitterAddress,
    protocolFee,
    owner.address
  );
  await paymentFactory.deployed();
  console.log("Payment Factory deployed to: ", paymentFactory.address);

  return paymentFactory.address;
}

module.exports = deployPaymentFactory;
