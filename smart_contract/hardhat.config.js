// https://eth-goerli.g.alchemy.com/v2/kvnyZGw0V9uK-XZ_HqQEqcVJtCXmCgME

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/kvnyZGw0V9uK-XZ_HqQEqcVJtCXmCgME',
      accounts: ['3ae...']
    }
  }
}