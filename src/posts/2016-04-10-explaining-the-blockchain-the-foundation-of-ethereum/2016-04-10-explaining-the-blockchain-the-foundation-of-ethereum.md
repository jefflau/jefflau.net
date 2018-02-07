---
title: Explaining the blockchain - the foundation of Ethereum
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
slug: /explaining-the-blockchain-the-foundation-of-ethereum
date: 2016-04-10T06:20:11.873Z
date_updated:   2016-04-20T10:57:11.008Z
category: "tech"
author: "jeff"
tags: 
    - ethereum 
    - blockchains
    - non-technical
---

Many people, such as myself, are learning about Ethereum now without any background knowledge on blockchain technology. We know what Bitcoin is, but we don't know much about it. Most of the material out there that explains blockchains well to complete beginners are bitcoin related, and it's hard to know how similar Ethereum is or isn't to Bitcoin itself. This and future articles are intended to fill that knowledge vacuum that exists in the Ethereum ecosystem.

This article is about the technical fundamentals of Ethereum. It's going to be thorough, but high level and we won't delve into implementation details or the mathematics of it, but enough so you'll have a foundational understanding of how blockchains as a technology works. We are going to explore the wonders of the blockchain, how this fundamentally underpins Ethereum and solves problems for cryptocurrencies such as double spending and censorship.

##The problem that digital currencies have

Bitcoin was the first decentralised currency, but it wasn't the first digital currency ever. Other systems such as the [Liberty Reserve](https://en.wikipedia.org/wiki/Liberty_Reserve) also existed. But it was shut down in 2013 due to allegations of money laundering. So the first problem that digital currencies face is censorship and something that would need to be solved in order to not let any country, even a country as powerful as the US to interfere.

Another problem digital currencies face is [double spending](https://en.wikipedia.org/wiki/Double-spending). Since digital assets can be duplicated infinitely, you will have a hyperinflation problem from day one. One of the ways to solve this problem is by creating a central service that holds records of every transaction ever made and can police the system so no one can spend more coins than they have. As we can see from Liberty Reserve this works, but creates a very serious problem in the system - it is a single and very fatal failure point in the system. 

The solution to this kind of censorship is to decentralise the ledger and make it public. If anyone can read the ledger and see what transactions have taken place previously you can make sure you don't accept coins that have been spent before. A public ledger solves this problem of double spending, but it creates even more problems than it solves. Since the ledger is now public, anyone can declare the truth of the ledger, and we all have an incentive to make the ledger more beneficial to ourselves. The incentive to be malicious is very very high and with any node on the network able to declare the status of the ledger, it would be almost impossible to come to a consensus on the state of transactions. This problem of consensus is known in the computer science field as the byzantine general's problem. 

The byzantine general's problem in short is the story of a group of generals attacking a city. They need to make a decision together at the same time to take the city or retreat, but there is latency between their communication, namely the time it takes for a messenger to walk over to the other camp. Any of the generals could be a traitor, so how do we come to a consensus about the decision they are going to make when some of the generals might be traitors and you don't know who. In this situation, the generals represent one of the many nodes in the blockchain that are verifying transactions and making sure they are valid. Blockchain solves this problem by changing the incentives of the nodes.

**Enter blockchains.**

##Blockchain technology

Blockchains are a type of public ledger or balance sheet that houses all the transactions ever created. Blockchains are formed of **blocks**, which are compromised of recent transactions grouped together. These blocks are chained together with references to the previous block, which create a chronological chain. The way blockchains solve the byzantine general's problem is that they add a cost to the process of verifying transactions. Anyone that wants to verify transactions, will have to bear that cost and therefore are less likely to want to attack the network as they will forfeit the cost they put into the network as well as future returns on their investment. The reason is the nodes that verify transactions receive fees for their work and they seek to gain more if the network stays in consensus as their compensation for keeping up the network will continue to have value. If the network goes out of consensus and begins to fork, the value of their compensation will go down. The first way blockchains came to consensus was with the proof of work protocol, released by the founder of Bitcoin, Satoshi Nakamoto.

##Proof of work

Proof of work is the protocol that the first three releases of Ethereum (Frontier, Homestead and Metropolis) will use. The cost involved in proof of work is the computational power expended to run through an algorithm that essentially brute-forces an answer to a cryptographic problem. The answer to the a block's cryptographic problem uses the hash (which can be viewed as an ID or name) of the previous block, which makes it impossible to mine blocks in advance. The nodes that take part in the proof of work are called miners. They are called miners as they *mining* for the next solution. If they find the solution first, they **earn** the right to add the next block to the chain, which gives them the reward for *mining* that block as well as any transaction fees. Once a block has been mined, the miner sends the new block to the rest of the network. If other people are mining that block when the new block has been recevied, they stop mining, add the new block to the chain and beginning mining the next block. 

In proof of work the longest chain is seen as **the truth** as it is the chain that statistically speaking should have the most computing power on it as the problems can only be solved by computational brute-force. Other nodes could technically continue to mine their own blocks, but because of this rule to join the longest chain, they would eventually end up in a fork of the network with themselves as the only node in the network, as they wouldn't have the computing power to create a longer chain. They would be mining all the reward, but the reward would be worth nothing as no one else would be on the network. So there is a incentive for nodes to switch immediately to the longest chain as they don't want to be mining useless and rewardless blocks.

One purpose of the proof of work protocol is to make it difficult for the same node to add consecutive blocks to the chain, which would allow them to edit the blockchain to their benefit. Without this incentive to edit the chain to their favour, it is much more advantageous to keep the blockchain in consensus by being an 'upstanding node' and verifying transactions honestly. 

##The 51% Attack problem

The 51% attack is the weakness in the proof of work protocol. If nodes collude to edit the chain to their advantage and they own 51% of the network, they will be mathematically much more likely to end up with a longer chain, and therefore they will have the ability to rewrite history. However with thousands of nodes on the network, it would be very hard to gain 51% of the computing power.

##Latency problem

Bitcoin's block time is around 10 minutes, which means you will have to wait 10 minutes to **confirm** your transaction has made it into the next block. It is recommended to wait for 6 block confirmations to make sure the transaction will not be reversed. With Ethereum block times can't be that high as it is a general purpose blockchain and most people aren't going to wait 10 minutes, let alone 1 hour. However there is an issue with shorter block times. 

The 51% attack described above becomes much more likely if you have a shorter block time. The reason for this is stale blocks. Stale blocks are blocks that never make it into the chain, but are mined anyway because of the issue of latency (They don't hear about the new block). The stale blocks are rejected by the network as a longer chain has already formed. Since these blocks never make it into the chain, some of the computing power that contributes to the security network is considered **stale** and do not contribute to the security of the network. This is because their computational power is wasted on a block that never makes it into the chain and therefore isn't contributing to making the chain longer.

With a shorter block time, the amount stale rate would increase and you would be able to attack the network with a share of the network much lower than 51%. Ethereum wants to have a much lower latency. If their block time gets to 12 seconds instead of 10 mins, their stale rate could be as high as 50%[^1], which of course makes the network very vulnerable to a minority attack.

##Centralisation of miners

Another possibly greater consequence of a high stale rate is the centralisation of miners. [Vitalik Buterin](https://en.wikipedia.org/wiki/Vitalik_Buterin) (the founder of Ethereum) worked out with a 60 second block time and 12 second latency to propagate around the network, a centralised mining pool with 30% of the nodes would gain an increased efficiency 5.7% if they solved a block. This assumes that the miners are all in one factory and therefore have a 0 latency and can begin to mine the next block immediately. Such an efficiency would be far too economically significant to allow. So with all these issues of a faster block time - are we doomed to waiting an hour to confirm our transactions?

##GHOST protocol

The GHOST protocol was first introduced by Yonatan Sompolinsky and Aviv Zohar in December 2013. Ethereum's current proof of work protocol, is a modified version of this protocol. It aims to solve the two issues described above. The problem with the original proof of stake protocol is that stale blocks do not contribute to network security, but they could. The GHOST protocol allows uncles to be created, which are blocks that are rewarded for their proof of work, but aren't part of the main chain. Uncles contribute to the main chain's security, by adding to the chain's 'score'. 

Previously the chain with the highest score was the longest chain, as that was the only way to score a chain. However the stale blocks (uncles) that attach onto the side of the main block, they create a sort of block 'tree'. The additional proof of work done by the uncles also adds to the score of the block. If an attacker wanted to rewrite history, they would not only need to mine the blocks, but also additional uncles to add to the score of their own forked chain. This makes it much more resilient to attack even with a very low block time as the high latency nodes still get to add their node to the chain, albeit as a 'branch' of the main block. In Ethereum's version of GHOST, the nodes that mine an uncle also get rewarded for their work, which keeps the incentive high even for high latency nodes. All in all this means that GHOST ensures that even if the efficiency of the network was 50% or even 5%, an attacker would still have to overcome the combined power of the network due to uncles.

##The future of the Ethereum blockchain

Everything described up to here is the current state of Ethereum's blockchain at the time of writing (Homestead). However there are some fairly big problems with proof of work that can't be solved. The largest one is the amount of *useless* work that is done to verify transactions. It wastes a lot of electricity and it will only get worse the larger it gets. One way to solve this is to switch to a different protocol and the one that Ethereum plans to move to is called Proof of Stake (PoS). Explaining PoS is out of scope of this article, but the general idea is to have validators instead of miners. The validators are financially **bonded** to the network. If you are familiar to bonds in traditional finance, it is similar in the sense that they are loaning money to the network, and have to keep it bonded for a certain period of time at which point they get their bond back plus interest. They have something at **stake**, and they get rewarded for playing nice and coming to consensus, and get punished with the removal of their deposit if they don't. Since they are only validating the blockchain, a lot less computational power is required and therefore a lot less electricity is used up and therefore will scale much better than proof of work.

The blockchain itself should be viewed as a technological leap forward for web technology. Not everything is suitable to be stored on the blockchain, because of the expense to do so, however the technology itself will add a layer of security and decentralisation to traditional web apps benefitting all areas of society. Blockchains as we see them today will not be the final solution; there are glaring issues such as scalability that will force the advancement of it. However with platforms like Ethereum, I believe that we will fix this issues and solidify blockchains as one of the revolutionary technologies of web 3.0

##References

https://chrispacia.wordpress.com/2013/09/02/bitcoin-mining-explained-like-youre-five-part-1-incentives/

http://www.dugcampbell.com/byzantine-generals-problem/

https://github.com/ethereum/wiki/wiki/White-Paper#modified-ghost-implementation

https://blog.ethereum.org/2014/07/11/toward-a-12-second-block-time/

https://blog.ethereum.org/2015/08/01/introducing-casper-friendly-ghost/

##Footnotes
[^1]: Vitalik explains the math behind the lower block times versus stale rate. https://blog.ethereum.org/2014/07/11/toward-a-12-second-block-time/
