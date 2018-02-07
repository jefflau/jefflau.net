---
title: "How to start developing on Ethereum for web developers"
slug: /how-to-start-developing-on-ethereum-for-web-developers
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
date : "2016-03-29T05:15:03.386Z"
date_updated:  "2016-04-17T16:54:57.922Z"
category: "tech"
author: "jeff"
tags:
  - ethereum
  - non-technical
  - other
---

As someone that is learning Ethereum, the ecosystem and how to make dapps, I've decided to share the resources I've found to ease you into it. If you have 0 knowledge on blockchains or Ethereum, please checkout my higher level post on Ethereum: http://jefflau.net/what-is-ethereum/

As a web developer I know HTML, CSS and Javascript, which is great, because apart from the smart contracts, I'm already half way there to building a DApp. If you have limited experience of web development or coding, I'd advise to start there, before jumping into building DApps, as it may get a little too much learning both at the same time. For me a web developer already, the hard part is learning how the blockchain works, how Ethereum the platform functions on top of this technology and how you fit into this ecosystem as a developer.

##Learning more about the Ethereum blockchain protocol

First we'll start with some background into Ethereum and how the system works. When I first heard about Ethereum I wanted to start writing contracts immediately, but I realised that I didn't *really* understand what Ethereum was yet.

Here's the *"explain it like you're 5"* version by [Fivedogit](https://docs.google.com/document/d/14EIe984_86Y-uuNm-a4EsVeD3eI4qAAlz_MZof1qkqM/edit): 

> Bitcoin says “Send X from A to B”. Ethereum says “Send X from A to B if J and K but not L”
Further[more], where all bitcoins always reside in the accounts of its participants, Ethereum has a second type of account: contracts. A contract can hold value and do something with it based on conditionals. For instance, a hundred people could pay $1 into a raffle contract which is rigged to pay out to a random user on the 100th payment.

Once you understand what the basic idea of what Ethereum is, you can begin to learn some of the more technical high level concepts of how Ethereum works. I spent some time researching as much as I could about Ethereum and the list below helped me understand what Ethereum really is: 

* Vitalik's white paper on Ethereum: https://github.com/ethereum/wiki/wiki/White-Paper
* Vitalik on Future Thinker's Podcast: http://futurethinkers.org/vitalik-buterin-ethereum-decentralized-future/
* Gavin Woods at Devcon1 on the Ethereum global computer: https://www.youtube.com/watch?v=U_LK0t_qaPo
* Gavin Woods on Software Engineering Daily: http://softwareengineeringdaily.com/2015/10/19/ethereum-with-gavin-wood/
* Aaron Davis on Software Engineering Daily: http://softwareengineeringdaily.com/2015/08/16/ethereum-with-aaron-davis/
* Vitalik at Devcon1 on the Ethereum blockchain protocol: https://www.youtube.com/watch?v=gjwr-7PgpN8
##Learning to write smart contracts

Once you kind of know what Ethereum is and why you might want to use it you'll be keen to start writing smart contracts. Smart contracts are the bread and butter of Ethereum development, they are the programs that are run on the blockchain. 
In the typical web development stack, this is your 'back-end', however unlike your back-end, it is stored on the Ethereum network. A smart contract can only be run when it is called by another smart contract or by an account. You can think of a contract as function that needs to be called before it can run.

Smart contracts are written in EVM byte code, but we're not that masochistic, we'll be writing in a higher level language. The 3 languages that you can write in are Solidity (Javascript), Serpent (Python) and LLL (Lisp), which resemble the 3 popular languages they were based on. Serpent and LLL are supposedly lower level than Solidity so if you're looking for more efficiency they might be better suited to the task. However as a beginner, there is much more documentation on Solidity so I'd recommend starting with Solidity first and then branch off if you wish.

The easiest way to get started is by downloading the [Ethereum Wallet](https://github.com/ethereum/mist/releases) and following the first tutorial on the homestead website: https://www.ethereum.org/token

This tutorial will take you through creating a token on the blockchain and being able to issue it to people in the network. You won't need anything else apart from Ethereum wallet, so it's a good place to start. The Ethereum Wallet lets you write solidity code, compile it and deploy it to test network (or live network) all in one, so it's the easiest way to get started. You can also write your solidity code in the browser using chriseth's [browser solidity](https://github.com/chriseth/browser-solidity) if you wish. I was using the browser solidity and then pasting it into my Ethereum Wallet.

##Learning Solidity

Solidity looks a lot like Javascript syntax, however it is statically typed, which may look confusing to those who have never written a language that had to define types before. After you get over that, it's actually surprisingly similar. Here's a comparison of a function in both Solidity and Javascript:

Solidity:
```js
function add(uint a, uint, b) returns(uint sum) {
  return a + b;
}
``` 
Javascript:
```javascript

function add(a, b) {
  return a + b;
}
```

Look pretty similar right? Apart from declaring the type of the parameters and return value, the syntax is almost identical.

Here is an object:

Solidity:
```js
mapping (address => uint256) public balanceOf;
``` 
Javascript:
```javascript
var balanceOf = {};
```

It's a little more verbose, but instead of using `var` for all variables, you just declare a variable with the **type** of variable it is. `mapping` is almost the same as a javascript object. The difference is you have to define in advance the data type of the keys and values you have when you initialise the map; something you don't have to do in Javascript. Variables can also have `public` prefixing the variable name, which allows the variable to be visible outside the contract.

`address` is a type for Ethereum address (20 bytes) and uint256 is a number from 0 to 115 quattuorvigintillion. And as the token tutorial explains: 
>  it's many vigintillions more than anything you are planning to use 

If you wanted to make a more custom mapping like you can with Javascript objects `{}` or JSON, you could use a `struct`:

```
struct Funder {
    address addr;
    uint amount;
}

struct Campaign {
    uint fundingGoal;
    mapping (uint => Funder) funders;
}
```

Unlike Javascript, you have to define what the object will look like before you can use it. The way you'd use it is like this:

```
struct Funder {
    address addr;
    uint amount;
}

struct Campaign {
    uint fundingGoal;
    uint numberOfFunders;
    mapping (uint => Funder) funders;
}

Campaign campaign;

function setUpCampaign(uint fundingGoal){
    campaign.fundingGoal = fundingGoal;
    campaign.numberOfFunders = 0;
    campaign.funders[campaign.numberOfFunders + 1] = Funder({
        addr: msg.sender,
        amount: 20
    });
}
```

As you can see, apart from having to be explicit about the type of data your variables are, the syntax is very similar. As a Javascript developer, I've never had to use many of these types, so if you're anything like me you'll probably find this part of the documentation useful: http://solidity.readthedocs.org/en/latest/types.html

###Solidity special keywords and global variables

There are several special keywords denoting ether and its smaller denominations aswell as keywords for time.

```solidity
/* All statements evaluate to true */

1 ether == 1000 finney;
1 ether == 1000000 szabo;
1 ether == 1000000000000000000 wei;

60 seconds == 1 minute;
60 minutes == 1 hour;
24 hours == 1 day;
7 days == 1 week;
365 days == 1 year;
```

Solidity also provides access to speical variables, `msg`, `block`, `tx` and `now`.

* `msg` is the most important, it gives information on the current call, who made it, what data they passed. The caller's address is globally available at `msg.sender`, which you'll use a lot.

* `block` gives you information on the current block, such as the `block.timestamp` or `block.number`

* `tx` gives you information of the entire transaction, such as the origin of the call (a contract could call another contract which was called by a person, so `msg.sender` wouldn't give you that address)
* `now` is an alias for `block.timestamp`

More information can be found here: http://solidity.readthedocs.org/en/latest/units-and-global-variables.html

###`this` refers to the contract or the contract's address

The `this` variable is similar to javascript as it refers to the contract object itself, it also has the extra functionality of automatically converting itself to the address of the contract when applicable so `this.func()` and `balanceOf[this]` are both valid and this transforms itself into the address of the contract in the second example.

http://solidity.readthedocs.org/en/latest/units-and-global-variables.html#contract-related

##Moving Foward

After you've finished the token tutorial, it would be good to look through the documentation for homestead and solidity if you haven't already and then move on to the second and third tutorials about [crowdfunding](https://ethereum.org/crowdsale) and creating an [organisation](https://ethereum.org/dao) on the blockchain. Below I've listed developer tools that will be useful to you going forward. Good luck!

##Development tools

**[Mist](https://github.com/ethereum/mist)** - Mist is the Ethereum dapp browser. Currently it packages the Ethereum wallet with it, which allows some GUI access to contracts. In the future it will also allow more dapp integrations. Here's a video tutorial of how to setup Mist: https://www.youtube.com/watch?v=MzT0fvmZ638

**[Ethereum Wallet](https://github.com/ethereum/mist/releases)** - The standalone wallet with the ability to deploy contracts, watch tokens and play on the testnet morden.


**[Mix](https://github.com/ethereum/wiki/wiki/Mix:-The-DApp-IDE)** - The Ethereum IDE, it compiles contract code and also sets up your own private chain for development

**AlethZero (deprecated)** - This is the previous dapp browser, it has been discontinued, although a lot of tutorials out there for the frontier version of Ethereum still reference it

**[Truffle](https://github.com/ConsenSys/truffle)** and **[Embark](https://iurimatias.github.io/embark-framework/)** - Development frameworks for dapps. Both are javascript based with [web3.js](https://github.com/ethereum/wiki/wiki/JavaScript-API) built in. Truffle uses its own wrapper to web3 called [pudding](https://github.com/ConsenSys/ether-pudding)

##References and Further Reading

* [Solidity Docs](http://solidity.readthedocs.org/en/latest/)
* [Ethereum Homestead Docs](https://ethereum-homestead.readthedocs.org/en/latest/index.html)
* [Ethereum 101 by Fivedogit](https://docs.google.com/document/d/14EIe984_86Y-uuNm-a4EsVeD3eI4qAAlz_MZof1qkqM/edit)
* [Solidity Baby Steps by Fivedogit](https://github.com/fivedogit/solidity-baby-steps)
* [Dapp using Meteor](https://github.com/ethereum/wiki/wiki/Dapp-using-Meteor#create-your-%C3%90app)
* [Token Tutorial](https://www.ethereum.org/token)
* [Crowdsale Tutorial](https://www.ethereum.org/crowdsale)
* [DAO Organisation Tutorial](https://www.ethereum.org/dao)





