import { ethers } from "hardhat";
import { Signer } from "ethers";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { LLC__factory, LLC } from "../typechain-types";


describe("Lilac", function () {
  
  let llcToken: LLC;
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;

  beforeEach(async function () {
    [owner, alice, bob] = await ethers.getSigners();
  });

  it("should successfully deploy lilac token", async function () {
    const llcFactory = (await ethers.getContractFactory(
        "LLC", owner
    )) as LLC__factory;
    llcToken = await llcFactory.deploy(
        owner.address,
        24 * 3600,
        owner.address
    )
  });
});
