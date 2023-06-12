# Solidity dice game - smart contracts

Dice game smart contracts made in Solidity

## Installation

These are installation instructions for Debian Linux 11.x:

```console
apt update
apt -y upgrade
apt -y install git yarn
git clone https://github.com/libersoft-org/solidity-dice-game.git
cd solidity-dice-game
yarn install
```

1. Edit a new file called ".secret" and put there a wallet mnemonic phrase (24 words) - you need to have some gas on this wallet to be able to deploy the smart contract.
2. Register on etherscan.io / bscscan.com / polygonscan.com or other etherscan-compatible block explorer and create your new API keys. This needs to be done to have your smart contract verified and made public on block explorer.
3. Edit .apikey_* files and add your API keys on the first line of each file (* means block explorer name, e.g.: etherscan, polygonscan, bscscan ...)
4. Edit the ./scripts/deploy.js file and set your smart contract variables
5. Run the deploy script:

```console
yarn install
./deploy.sh
```

## Used dependencies

- Truffle v5.4.26 (core: 5.4.26)
- Solidity - ^0.8.11 (solc-js)
- Node v16.13.1
- NPM 8.3.0
- Web3.js v1.5.3
- Yarn 1.22.17

## License:
This software is open source released under [**Unlicense**](./LICENSE)

## Donations

Donations are important to support the ongoing development and maintenance of our open source projects. Your contributions help us cover costs and support our team in improving our software. We appreciate any support you can offer.

To find out how to donate our projects, please navigate here:

[![Donate](https://raw.githubusercontent.com/libersoft-org/documents/main/donate.png)](https://libersoft.org/donations)

Thank you for being a part of our projects' success!
