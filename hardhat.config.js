require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const testEnv = JSON.parse(fs.readFileSync('env.json'));

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${testEnv.POLYGON_PROJECT_ID}`,
      accounts: [testEnv.METAMASK_PRIVATE_KEY]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${testEnv.POLYGON_PROJECT_ID}`,
      accounts: [testEnv.METAMASK_PRIVATE_KEY]
    }
  },
  solidity: "0.8.4",
};
