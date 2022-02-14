import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Vesting__factory, Vesting } from "../typechain-types";

async function main() {
  const [owner]: SignerWithAddress[] = await ethers.getSigners();
  const VESTING: Vesting__factory = (await ethers.getContractFactory(
    "Vesting", owner,
  )) as Vesting__factory;
  const vestingInstance: Vesting = await VESTING.deploy();
  await vestingInstance.deployed();

  console.log("VESTING deployed to:", vestingInstance.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
