# Hardhat Template - AVAX

This will set you up instantly to develop smart contracts on the Avalanche Network using Hardhat and Javascript.

# Usage

Setup:
```npm i``` --> Download all dependencies.

Development commands:
- ```npm run compile``` --> Compile all contracts.
- ```npm run test``` --> Run all test scripts.
- ```npm run deploy-testnet``` --> Run deploy script on Fuji.
- ```npm run deploy-mainnet``` --> Run deploy Script on Avax Mainnet.
- *You can also use ```npx hardhat <commad>``` as well.

# Testing

The repository currently uses chai for unit tests. There is also a helper function called ```hasReason``` to identify revert reasons within ```test/common.js```

# Useful Dependencies

- ```hardhat-gas-reporter``` --> See how much gas it costs to deploy your contracts, as well as to use each function.
- ```@nomiclabs/hardhat-etherscan``` --> Much easier to verify contracts with than etherscan ui.
