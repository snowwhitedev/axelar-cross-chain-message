require("dotenv").config();

require('hardhat-contract-sizer');
require("@nomiclabs/hardhat-waffle");
require(`@nomiclabs/hardhat-etherscan`);
require("solidity-coverage");
// require('hardhat-gas-reporter');
require('hardhat-deploy');
require('hardhat-deploy-ethers');
require('@openzeppelin/hardhat-upgrades');

const PRIVATE_KEY_MAINNET = process.env.PRIVATE_KEY_MAINNET ? process.env.PRIVATE_KEY_MAINNET : '0x2222453C7891EDB92FE70662D5E45A453C7891EDB92FE70662D5E45A453C7891';
const PRIVATE_KEY_TESTNET = process.env.PRIVATE_KEY_TESTNET ? process.env.PRIVATE_KEY_TESTNET : '0x2222453C7891EDB92FE70662D5E45A453C7891EDB92FE70662D5E45A453C7891';

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

function getMnemonic(networkName) {
  if (networkName) {
    const mnemonic = process.env['MNEMONIC_' + networkName.toUpperCase()]
    if (mnemonic && mnemonic !== '') {
      return mnemonic
    }
  }

  const mnemonic = process.env.MNEMONIC
  if (!mnemonic || mnemonic === '') {
    return 'test test test test test test test test test test test junk'
  }

  return mnemonic
}

function accounts(chainKey) {
  return { mnemonic: getMnemonic(chainKey) }
}

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {

  solidity: {
    compilers: [
      {
        version: "0.8.10",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
    ]
  },

  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },

  namedAccounts: {
    deployer: {
      default: 0,    // wallet address 0, of the mnemonic in .env
    },
    proxyOwner: {
      default: 1,
    },
  },

  networks: {
    hardhat: {},
    ethereum: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`, // public infura endpoint
      chainId: 1,
      accounts: [`${PRIVATE_KEY_MAINNET}`],
    },
    bsc: {
      url: "https://bsc-dataseed1.binance.org",
      chainId: 56,
      accounts: accounts(),
    },
    avalanche: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      chainId: 43114,
      accounts: accounts(),
    },
    polygon: {
      url: "https://rpc-mainnet.maticvigil.com",
      chainId: 137,
      accounts: accounts(),
    },
    arbitrum: {
      url: `https://arb1.arbitrum.io/rpc`,
      chainId: 42161,
      accounts: [`${PRIVATE_KEY_MAINNET}`],
    },
    optimism: {
      url: `https://mainnet.optimism.io`,
      chainId: 10,
      accounts: accounts(),
    },
    fantom: {
      url: `https://rpcapi.fantom.network`,
      chainId: 250,
      accounts: accounts(),
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_GOERLI_KEY}`,
      chainId: 5,
      accounts: [`${PRIVATE_KEY_TESTNET}`],
    },
    'bsc-testnet': {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      chainId: 97,
      accounts: [`${PRIVATE_KEY_TESTNET}`],
    },
    fuji: {
      url: `https://api.avax-test.network/ext/bc/C/rpc`,
      chainId: 43113,
      accounts: [`${PRIVATE_KEY_TESTNET}`],
    },
    "fuji-test": {
      url: `https://api.avax-test.network/ext/bc/C/rpc`,
      chainId: 43113,
      accounts: [`${PRIVATE_KEY_TESTNET}`],
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_MUMBAI_KEY}`,
      chainId: 80001,
      // accounts: accounts(),
      accounts: [`${PRIVATE_KEY_TESTNET}`],
    },
    'arbitrum-goerli': {
      url: `https://arb-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_ARBITRUM_GOERLI}`,
      chainId: 421613,
      // accounts: accounts()
      accounts: [`${PRIVATE_KEY_TESTNET}`],
    },
    'metis-goerli': {
      url: `https://goerli.gateway.metisdevops.link`,
      chainId: 599,
      // accounts: accounts()
      accounts: [`${PRIVATE_KEY_TESTNET}`],
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY // ether scan API key
  },
};
