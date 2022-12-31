// hardhat.config.js

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");

const FUJI_URL = process.env.FUJI_URL; // https://api.avax-test.network/ext/bc/C/rpc
const AVAX_URL = process.env.AVAX_URL; // https://api.avax.network/ext/bc/C/rpc
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const SNOWTRACE_API_KEY = process.env.SNOWTRACE_API_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    fuji: {
      url: FUJI_URL,
      accounts: [PRIVATE_KEY]
    },
    avax: {
      url: AVAX_URL,
      accounts: [PRIVATE_KEY]
    }
  },
    etherscan: {
      apiKey: {
        avalancheFujiTestnet: SNOWTRACE_API_KEY
      }
    },
    gasReporter: {
      currency: 'AVAX',
      gasPrice: 21
    }
};