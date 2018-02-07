---
title: Interacting with the 0x smart contracts via Solidity
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
slug: /interacting-with-the-0x-smart-contracts-via-solidity
date: 2017-12-03T16:20:26.404Z
date_updated:   2017-12-08T09:33:21.565Z
category: "tech"
author: "jeff"
tags: 
    - ethereum
    - 0x
    - solidity
---

##Short intro to 0x

I've been playing around with the 0x smart contracts recently as a means to getting better at Solidity. I decided to share what I've learnt as I had some trouble getting it to work at first, and most of the tutorials out there right now are interacting with the 0x contracts directly with Javascript. The first thing you need to understand to start working with 0x is how the ERC20 token works. From a very high level, each ERC20 token has its own contract, which holds the balance of people who own tokens. The function we will need from the token contract will be the `allowance` function. 0x does all the trading for us, so what this function does it allows another smart contract to access our tokens. Once it has access, it can actually make the trades by pulling the tokens our of our smart contract using the `TokenTransferProxy` contract. 

The high level overview of how 0x works is that there are two main contracts. There is the `Exchange` contract, which deals with verifying that the trade is correct and still available and there is the `TokenTransferProxy` contract that deals with exchange the tokens between the two parties. This is the contract that needs the `allowance` from your smart contract. You do not deploy your own 0x contracts, the contracts have already been deployed by the 0x team on the test and mainnet, which are free and open for anyone to use.

##Coding your first trade

The only contract we will actually be interacting with is the `Exchange` contract. The function we will want to call to make the trade is called `fillOrder` and it takes all the information from the trade, and then passes the trade onto the `TokenTransferProxy` contract if the trade is correct. Before calling that function we will first need to import the [ERC20 standard `Token` contract](https://github.com/ConsenSys/Tokens/blob/master/contracts/Token.sol) as an abstract contract so we have the interface to instantiate the tokens we want to allow our contract to trade with. We will then need to setup the Exchange abstract contract so we can call the `fillOrder` function on it. We don't need anything but the address of the `TokenTransferProxy` contract as we do not interact with it directly apart from giving it access to our token funds. 

```solidity
pragma solidity ^0.4.18;
import './Token.sol';
import './Exchange.sol';

contract Trader {
  Exchange public zrxExchange;
  address public zrxTokenTransferProxy;

  function Trader (uint networkId) public {

      zrxExchange = Exchange(0x90Fe2Af704B34E0224bF2299C838E04d4Dcf1364); //kovan exchange.sol
      zrxTokenTransferProxy = 0x087Eed4Bc1ee3DE49BeFbd66C662B434B15d49d4;
  }
 
  function setAllowanceForProxyContract (address tokenContract, uint amount) public returns (bool success) {
    Token tokenInstance = Token(tokenContract);
    return tokenInstance.approve(zrxTokenTransferProxy, amount);
  }
}
```

In this code we have setup the constructor and the variables for the Kovan testnet exchange and proxy addresses. We have also imported abstract contracts for the [`Exchange.sol`](https://gist.githubusercontent.com/anonymous/9d30ecf7bdf6bd6f416e3ca44ca07750/raw/ced6c1506301464b8b794dddee189c7da0d2d629/Exchange.sol) and the [`Token.sol`](https://github.com/ConsenSys/Tokens/blob/master/contracts/Token.sol)

The next thing we need to do is to actually write the code for the trade, which is pretty simple. We just take all the arguments that is required for the trade and then call the `fillOrder` function from the `Exchange.sol` contract which does the rest for us.

```
function makeTrade(
  address[5] orderAddresses,
  uint[6] orderValues,
  uint fillTakerTokenAmount,
  bool shouldThrowOnInsufficientBalanceOrAllowance,
  uint8 v,
  bytes32 r,
  bytes32 s
) public returns (uint tokenAmount) {
      
  return zrxExchange.fillOrder(
     orderAddresses,
     orderValues,
     fillTakerTokenAmount, 
     shouldThrowOnInsufficientBalanceOrAllowance, 
     v, 
     r, 
     s
  );
}
```

##Test your trade

I was using [Remix](https://remix.ethereum.org) to test it as you can directly deploy your contract and then call functions it after in the same interface.

* ###Create your order
Create your order with the [0x portal](https://0xproject.com/portal) using your metamask account.

* ###Deploy our contract
Set up an allowance by calling the `setAllowanceForProxyContract` function, which is already preloaded with the `TokenProxyTransfer` address deployed on Kovan. 

* ###Transfer tokens
Your smart contract needs the tokens you will be trading with your second account. You can use the 0x portal interface to send these dummy tokens to trade.

* ###Make the trade

  Call the `makeTrade` function using Remix and the correct arguments. Make sure if you haven't specified a taker you set your taker to `0x000...` as the argument is for the signed trade itself and not for the taker who is actually taking the trade. In short that means, the taker's address (in this case our smart contract) does not actually have to be in the parameters unless it is actually specified in the trade JSON. Most of the time this won't be unless it is a private trade.

##Conclusion

I've simplified the contract as much as possible for learning purposes, but you will most likely want to make the contract ownable using normal Solidity patterns, and you will want to create functions to actually withdraw your tokens such as this:

```solidity
function withdrawToken(address tokenContract, uint amount) onlyOwner public returns(bool success){
  Token tokenInstance = Token(tokenContract);
  success = tokenInstance.transfer(owner, amount);
  return success;
}
```


