---
title: EtherPing - Notifications for the Ethereum blockchain
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
slug: /etherping-notifications-for-your-blockchain-project
date: 2016-05-14T16:52:00.000Z
date_updated:   2016-05-15T05:10:59.064Z
category: "tech"
author: "jeff"
tags: 
    - ethereum
    - blockchains
    - etherping
---

If you've been reading my blog, you will know that I've been super interested in Ethereum recently. And that passion has turned into working on the first project related to the blockchain. That project is [EtherPing](http://etherping.com). I've been working on it with [@hiddentao](http://twitter.com/hiddentao), who is also working on [Mist](https://github.com/ethereum/mist)

###What is EtherPing?

EtherPing is a web application that sends you notifications when an Ethereum account of your choosing receives a transaction. This could be one of your contracts, your own Ethereum wallet or another account just for the hell of it. 

One of the problem with Ethereum wallets right now is that you don't know when you've received funds until you open up your wallet. EtherPing aims to solve this visibility problem. We  monitor the blockchain for your account and send you a notification when either a transaction has been received or a transaction has a certain amount of [confirmations](http://ethereum.stackexchange.com/questions/319/what-number-of-confirmations-is-considered-secure-in-ethereum). The recommended amount of confirmations at the time of writing is 12 confirmations. However depending on how big the transfer is, you may want to wait longer. EtherPing allows your to decide how many confirmations you want to receive before we send you an email. If you want to do this right now, you would have to manually monitor the blockchain using your local node. EtherPing takes that headache out of your development workflow.

EtherPing isn't just for developers either. You could just be a user of Ethereum and are using Ethereum to take donations or payment. When a payment has been received for a product, it is paramount that you know about it immediately so you can send out the goods. Using EtherPing is as easy as entering the account address you want to monitor and the email you want to receive the notifications to.

###The future of EtherPing

In the future we want to start adding support for other kinds of notifications such as a Slack, text messages. We also want tow create an API interface that allows you to setup notifications programmatically allowing you to create 'pings' from within your program. Currently the interface lacks any kind of management features, it just allows you to track one account. Once we have identified the needs for our users, we plan to create a user interface where you can manage all our notifications, edit, delete and also have a dashboard of analytics on all your accounts.

Check it out today at http://etherping.com
