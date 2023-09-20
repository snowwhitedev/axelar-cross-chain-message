const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AxelarExample", function () {
  before(async function () {
    this.AxelarExample = await ethers.getContractFactory("LZEndpointMock");

    this.signers = await ethers.getSigners();
    this.account1 = this.signers[0].address;
    this.account2 = this.signers[1].address;
  });
  beforeEach(async function () {
    
  });

  it("Checking messages from the main chain", async function () {
    
  });
});
