import { task, HardhatUserConfig } from "hardhat/config";
import '@nomiclabs/hardhat-ethers'
import "@nomiclabs/hardhat-waffle";
import '@typechain/hardhat'
import "tsconfig-paths/register";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
};

export default config;
