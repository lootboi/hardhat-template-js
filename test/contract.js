const { initSmartContracts, hasReason } = require("./common.js");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Contract Name", function() {
    beforeEach("Check Deployment", async function () {

        // Get signers + contract instance
        [owner, addr1, addr2] = await ethers.getSigners();
        contract = await initSmartContracts();

    })
    it("Check Deployment Conditions", async function() {
        // Unit test goes here
    })
});