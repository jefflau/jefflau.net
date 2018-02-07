---
title: "How Ethereum wallets work and how to back them up correctly"
slug: /how-ethereum-wallets-work-and-how-to-back-them-up
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
date: 2016-03-30T09:45:24.345Z
date_updated:   2016-04-17T16:55:27.287Z
category: "tech"
author: "jeff"
tags: 
    - ethereum
    - non-technical
---

If you've used bitcoin wallets and backed them up yourself, they work in the same way, so if you're coming from that background, you probably don't need to read this article. This is for people that are learning about Ethereum as their first cryptocurrency and want to understand a little more about how to properly store their coins with as little technical detail to get lost in as possible.

As someone completely new to blockchains, you might not know how your ether is actually stored. I myself as someone that didn't know anything about bitcoin before I started learning about Ethereum know how this feels. You might think you have actual digital coins stored on your computer. You may have heard that you need to back up your wallet - does that mean I'm duplicating coins? You might think that your password is enough to get back your coins. That's not how it works.

To understand how your coins are stored and accessed, you need to understand a little bit about public/private key encryption. If you've ever used SSH keys before, it's similar. You have a pair of keys that are randomly generated (usually by your wallet application). The public key in ethereum is the address you give to other people to send money to your account. The private key is hidden away behind password encryption, and is the key that proves to the network you are who you say you are. The 'wallet' that you are storing is actually just the private key and as long as you have that, you can access your coins. The reason why it is password protected is so if someone manages to get access to your private key, they still need to crack your password to get access to your account.

The way that Ethereum stores coins, is on the blockchain, it has a record of how much ether is stored at each address. This means if there wasn't any public/private keys, anyone could just use your address and withdraw coins from your account. You don't actually store any **coins** on your computer, you just hold the **key** that unlocks the coins on the network and allow you to use them. It's how you **prove** to Ethereum that you are the owner of those coins. If someone else has your private key, they can essentially pretend to be you, and bye bye ether.

So to **'backup'** your wallet, all you need to do is copy that key and put it somewhere else such as USB drive, a piece of paper or on another server. If you're not a programmer, and even if you are, you are most likely using the official Ethereum Wallet. When you first open the application and create a new account, it will create a public/private keypair for you and store it in one of these locations: 

* Mac: `~/Library/Ethereum/keystore`
* Linux: `~/.ethereum/keystore`
* Windows: `%APPDATA%/Ethereum/keystore`

Even if you don't use Ethereum wallet, every wallet app will store your keys here. Each file in this folder represents one public/private keypair and each key pair is equal to an account. Once you've stored this file somewhere else, you can safely chuck your computer out the window, and your ether is still safe. Your private key is then encrypted and can only be decrypted with your password. There is no 'forgot password' feature so don't forget it or you destroyed your computer for nothing!

Happy Ethering!

##References

* https://github.com/ethereum/go-ethereum/wiki/Backup-&-restore
* https://chrispacia.wordpress.com/2013/09/29/bitcoin-explained-like-youre-five-part-4-securing-your-wallet/
