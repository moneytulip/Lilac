import { ethers } from "hardhat";
import { Signer } from "ethers";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { WeightedPool__factory, GenericERC20__factory, WeightedPool, GenericERC20 } from "../typechain-types";


describe("Lilac", function () {
  
  let weightedPool: WeightedPool;
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;
  let token0: GenericERC20;
  let token1: GenericERC20;

  beforeEach(async function () {
    [owner, alice, bob] = await ethers.getSigners();
    const tokenFactory = (await ethers.getContractFactory("GenericERC20")) as GenericERC20__factory;
    token0 = await tokenFactory.deploy("A", "A", 18);
    token1 = await tokenFactory.deploy("A", "A", 18);
  });

  it("should deploy weighted pool", async function () {

    const Vault = await ethers.getContractFactory("Vault");
    const vault = await Vault.deploy(
      bob.address,
      token0.address,
    );
    const WeightedPool = (await ethers.getContractFactory(
        "WeightedPool", owner
    )) as WeightedPool__factory;
    weightedPool = await WeightedPool.deploy(
      vault.address,
      "test",
      "test",
      [token1.address, token0.address],
      ["500000000000000000", "500000000000000000"],
      [bob.address, bob.address],
      1e12,
      owner.address,
    );
  });

});
