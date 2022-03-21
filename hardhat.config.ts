import { task, HardhatUserConfig } from "hardhat/config";
import '@nomiclabs/hardhat-ethers'
import "@nomiclabs/hardhat-waffle";
import '@typechain/hardhat'
import "tsconfig-paths/register";
import "hardhat-deploy";
import "hardhat-contract-sizer";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    oasis: {
      url: 'https://emerald.oasis.dev',
      chainId: 42262,
      gas: 10000000,
    },
    oasisTestnet: {
      url: 'https://testnet.emerald.oasis.dev',
      chainId: 42261,
      gas: 10000000,
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
    },
  },
};

export default config;
