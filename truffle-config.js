require('babel-register');
require('babel-polyfill');
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    binanceTestnet: {
      provider: () => provider,
      network_id: "97",
      gas: 1000000
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}

const provider = new HDWalletProvider({
  privateKeys: ['2785a27920bae6c63c456174a18e95208d1fde0ec3bc443cf164316181318de2'],
  providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
})
