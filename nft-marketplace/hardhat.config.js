require("@nomiclabs/hardhat-waffle");

const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://speedy-nodes-nyc.moralis.io/1429629bd936882fc14b98a4/polygon/mumbai`,
      accounts: [privateKey]
    },
    mainnet: {
      url: ``,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
