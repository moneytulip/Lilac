import { ethers } from "hardhat";
import { Signer } from "ethers";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { LLC__factory, LLC } from "../typechain-types";
import { Swap__factory, Swap } from "../typechain-types";


describe("Lilac", function () {
  
  let llcToken: LLC;
  let swapContract: Swap;
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
  it("should successfully deploy a swap", async function () {
    const Amp = await ethers.getContractFactory("AmplificationUtils");
    const amp = await Amp.deploy();
    const SwapUtil = await ethers.getContractFactory("SwapUtils");
    const swapUtils = await SwapUtil.deploy();
    
    const swapFactory = (await ethers.getContractFactory(
        "Swap", {
          signer: owner,
          libraries: {
            AmplificationUtils: amp.address,
            SwapUtils: swapUtils.address,
          },
        }
    )) as Swap__factory;
    swapContract = await swapFactory.deploy();
  });
});
