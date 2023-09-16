const {expect} = require("chai");
const { ethers } = require("hardhat");

describe("Minting the token and returning it", function () {
    it("should the contract be able to mint a function and return it", async function() {
        const metadata = "https://opensea-creatures-api.herokuapp.com/api/creature/1"
        const TokenContract = await ethers.getContractFactory("Tokenizer");
        const tokenContract = await TokenContract.deploy();
        const transaction = await tokenContract.createToken(metadata);
        const tx = await transaction.wait();

        const event = tx.event[0];
        const value = event.args[2];
        const tokenId = value.toNumber();

        const tokenURI = await tokenContract.tokenURI(tokenId);

        expect(tokenURI).to.be.equal(metadata);
    });
});