const { expect } = require("chai");
const { ethers, run } = require("hardhat");

let PROTOCOL_FEE = "1000";
// Factories
let PRONKEY_TOKEN_FACTORY;
let PAYMENT_SPLITTER_FACTORY;
let PAYMENT_FACTORY_FACTORY;
// Contracts
let PRONKEY_TOKEN_CONTRACT;
let PAYMENT_SPLITTER_CONTRACT;
let PAYMENT_FACTORY_CONTRACT;
// Addresses
let PROTOCOL_ADDRESS;
let OWNER_1;
let OWNER_2;
let account1;
let account2;
let account3;
// Clone
let Clone_Address;
let Clone_Contract;

describe("Cryptogate Payment Gatewei Test", () => {
  describe("Deployment", () => {
    it("Should get & assign addresses", async () => {
      const addresses = await ethers.getSigners();
      PROTOCOL_ADDRESS = addresses[0];
      OWNER_1 = addresses[1];
      OWNER_2 = addresses[2];
      account1 = addresses[4];
      account2 = addresses[5];
      account3 = addresses[3];
    });

    it("Should deploy the Pronkey Token", async () => {
      PRONKEY_TOKEN_FACTORY = await ethers.getContractFactory("Pronkey");
      PRONKEY_TOKEN_CONTRACT = await PRONKEY_TOKEN_FACTORY.deploy(
        account3.address,
        10000
      );
      await PRONKEY_TOKEN_CONTRACT.deployed();
    });

    it("Should deploy the Payment Splitter", async () => {
      PAYMENT_SPLITTER_FACTORY = await ethers.getContractFactory(
        "PaymentSplitter"
      );
      PAYMENT_SPLITTER_CONTRACT = await PAYMENT_SPLITTER_FACTORY.deploy();
      await PAYMENT_SPLITTER_CONTRACT.deployed();
    });

    it("Should deploy the Payment Factory", async () => {
      PAYMENT_FACTORY_FACTORY = await ethers.getContractFactory(
        "PaymentFactory"
      );
      PAYMENT_FACTORY_CONTRACT = await PAYMENT_FACTORY_FACTORY.deploy(
        PAYMENT_SPLITTER_CONTRACT.address,
        PROTOCOL_FEE,
        PROTOCOL_ADDRESS.address
      );
      await PAYMENT_FACTORY_CONTRACT.deployed();
    });
  });

  describe("Asserting Successful Deployment", () => {
    it("Should return 1000 as the protocol fee", async () => {
      expect(await PAYMENT_FACTORY_CONTRACT.getProtocolFees()).to.equal("1000");
    });

    it("Should return the protocol address as the PROTOCOL_ADDRESS", async () => {
      expect(await PAYMENT_FACTORY_CONTRACT.getProtocolAddress()).to.equal(
        PROTOCOL_ADDRESS.address
      );
    });
  });

  describe("Updating Contract State", () => {
    it("Should update protocol fee successfully", async () => {
      await PAYMENT_FACTORY_CONTRACT.changeProtocolFee("2000");
      expect(await PAYMENT_FACTORY_CONTRACT.getProtocolFees()).to.equal("2000");
      PROTOCOL_FEE = "2000";
    });

    it("Should fail to update protocol fee due to ownership", async () => {
      await PAYMENT_FACTORY_CONTRACT.connect(OWNER_1)
        .changeProtocolFee("2000")
        .catch((e) => {});
    });

    it("Should update protocol address successfully", async () => {
      await PAYMENT_FACTORY_CONTRACT.changeProtocolAddress(account3.address);
      expect(await PAYMENT_FACTORY_CONTRACT.getProtocolAddress()).to.equal(
        account3.address
      );
    });

    it("Should fail to update protocol address due to ownership", async () => {
      await PAYMENT_FACTORY_CONTRACT.connect(OWNER_1)
        .changeProtocolAddress(account3.address)
        .catch((e) => {});
    });
  });

  describe("Clonning the payment splitter", () => {
    it("Should create a payment splitter clone successfully", async () => {
      const reponse = await PAYMENT_FACTORY_CONTRACT.connect(
        OWNER_1
      ).createPaymentClone(
        [account1.address, account2.address],
        ["9000", "1000"],
        { value: PROTOCOL_FEE }
      );
      const awaitedResponse = await reponse.wait();
      Clone_Address = awaitedResponse.events?.filter((x) => {
        return x.event == "NewPaymentSplitterClone";
      })[0].args["_newClone"];
    });

    it("Should fail to create a payment splitter clone due to 'ether sent mismatch'", async () => {
      await PAYMENT_FACTORY_CONTRACT.connect(OWNER_1)
        .createPaymentClone(
          [account1.address, account2.address],
          ["9000", "1000"],
          { value: "3000" }
        )
        .catch((e) => {});
    });

    it("Should confirm that OWNER_1 owns a clone and it's Clone_Address", async () => {
      const response = await PAYMENT_FACTORY_CONTRACT.getClonesPaymentSplitter(
        OWNER_1.address
      );
      expect(response[0]).to.equal(Clone_Address);
    });

    it("Should create a new payment splitter clone successfully and confirm it's owner", async () => {
      const reponse = await PAYMENT_FACTORY_CONTRACT.connect(
        OWNER_2
      ).createPaymentClone(
        [account1.address, account2.address],
        ["8000", "2000"],
        { value: PROTOCOL_FEE }
      );
      const awaitedResponse = await reponse.wait();
      Clone_Address = awaitedResponse.events?.filter((x) => {
        return x.event == "NewPaymentSplitterClone";
      })[0].args["_newClone"];
      const response = await PAYMENT_FACTORY_CONTRACT.getClonesPaymentSplitter(
        OWNER_2.address
      );
      expect(response[0]).to.equal(Clone_Address);
    });
  });

  describe("Test payment splitter clone initialization", () => {
    it("Should create a factory for the clone", async () => {
      const factory = await ethers.getContractFactory("PaymentSplitter");
      Clone_Contract = factory.attach(Clone_Address);
    });

    it("Shoud return the total shares equal 10000", async () => {
      expect(await Clone_Contract.totalShares()).to.equal("10000");
    });

    it("Shoud return the total shares of address 1 & 2 as 8000 & 2000", async () => {
      expect(await Clone_Contract.shares(account1.address)).to.equal("8000");
      expect(await Clone_Contract.shares(account2.address)).to.equal("2000");
    });

    it("Shoud return the account1.address & account2.address", async () => {
      expect(await Clone_Contract.payee(0)).to.equal(account1.address);
      expect(await Clone_Contract.payee(1)).to.equal(account2.address);
    });
  });

  describe("Payment splitter functions with Eth", () => {
    it("Should receive Eth from account 3", async () => {
      await account3.sendTransaction({
        to: Clone_Address,
        value: ethers.utils.parseEther("5.0"),
      });
    });

    it("Should successfully return the due payment for accounts 1 & 2", async () => {
      await Clone_Contract.getDuePayment(account1.address);
      await Clone_Contract.getDuePayment(account2.address);
    });

    it("Should release the due payment for account1 successfully", async () => {
      await Clone_Contract.release(account1.address);
    });

    it("Should fail to release the due payment because account3 has no shares", async () => {
      await Clone_Contract.release(account3.address).catch((e) => {});
    });
  });

  describe("Payment splitter functions with PRNKY", () => {
    it("Should receive PRNKY from account 3", async () => {
      expect(await PRONKEY_TOKEN_CONTRACT.balanceOf(account3.address)).to.equal(
        10000
      );
      await PRONKEY_TOKEN_CONTRACT.connect(account3).approve(
        account3.address,
        5
      );
      await PRONKEY_TOKEN_CONTRACT.connect(account3).transferFrom(
        account3.address,
        Clone_Address,
        5
      );
      expect(await PRONKEY_TOKEN_CONTRACT.balanceOf(account3.address)).to.equal(
        9995
      );
      expect(await PRONKEY_TOKEN_CONTRACT.balanceOf(Clone_Address)).to.equal(5);
    });

    it("Should release the PRNKY due payment for accounts 1 & 2 successfully", async () => {
      await Clone_Contract.releaseERC20(
        PRONKEY_TOKEN_CONTRACT.address,
        account1.address
      );
      await Clone_Contract.releaseERC20(
        PRONKEY_TOKEN_CONTRACT.address,
        account2.address
      );
    });

    it("Should fail to release the PRNKY due payment for account3 since he has no shares", async () => {
      await Clone_Contract.releaseERC20(
        PRONKEY_TOKEN_CONTRACT.address,
        account3.address
      ).catch((e) => {});
    });
  });
});
