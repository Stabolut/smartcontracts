require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "0000000000000000000000000000000000000000000000000000000000000001";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {},
    arbitrumSepolia: {
      url: process.env.ARB_RPC_URI || "https://sepolia-rollup.arbitrum.io/rpc",
      chainId: 421614,
      accounts: [PRIVATE_KEY],
    },
    arbitrumOne: {
      url: process.env.ARB_MAINNET_RPC || "https://arb1.arbitrum.io/rpc",
      chainId: 42161,
      accounts: [PRIVATE_KEY],
    },
    apothem: {
      url: process.env.XDC_RPC_URI || "https://rpc.apothem.network",
      chainId: 51,
      accounts: [PRIVATE_KEY],
    },
  },
};
