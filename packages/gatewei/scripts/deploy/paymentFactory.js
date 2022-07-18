const hre = require("hardhat");

async function deployPaymentFactory(ownerAddress, paymentSplitterAddress, protocolFee = '1000') {
  const PaymentFactory = await hre.ethers.getContractFactory("PaymentFactory");
  const paymentFactory = await PaymentFactory.deploy(
    paymentSplitterAddress,
    protocolFee,
    ownerAddress
  );
  await paymentFactory.deployed();
  console.log("Payment Factory deployed to: ", paymentFactory.address);
  
  return paymentFactory.address;
}

module.exports = deployPaymentFactory;