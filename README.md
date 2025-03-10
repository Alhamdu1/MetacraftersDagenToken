DegenToken Contract
Description
DegenToken is a simple ERC20 token contract named "Degen" with the symbol "DGN". It provides basic functionalities of an ERC20 token along with additional features such as minting, burning, transferring tokens, and redeeming tokens for specific items or privileges.

Features
ERC20 Compliance: The contract follows the ERC20 standard interface for fungible tokens.
Minting: The owner of the contract can mint new Degen tokens and distribute them to specified addresses.
Burning: Token holders can burn their tokens, removing them from circulation.
Transfer Tokens: Token holders can transfer tokens to other addresses.
Redeem Tokens: Token holders can redeem tokens for specific items or privileges, such as NFTs, T-shirts, or special roles on the Degen Discord server.
Functions
mint(address to, uint256 amount): Mint new tokens and assign them to the specified address.
burnTokens(uint256 amount): Burn tokens from the caller's balance.
transferTokens(address receiver, uint256 value): Transfer tokens from the caller's balance to the specified receiver.
showStoreItems(): Display the available items for purchase.
redeemTokens(uint8 userChoice): Redeem tokens for specific items or privileges based on the user's choice.
Usage
Deploy the contract to the Ethereum network.
Mint initial tokens if necessary.
Users can interact with the contract to transfer, burn, or redeem tokens for items or privileges.

Requirements
Solidity ^0.8.20
OpenZeppelin Contracts library
License
This project is licensed under the MIT License - see the LICENSE file for details.

contractAddress:0xb4C4b40B3BB9698d378E09b7Bc291B0Dc0b154Db#
contractAddress link: https://testnet.snowtrace.io/address/0xb4C4b40B3BB9698d378E09b7Bc291B0Dc0b154Db#
