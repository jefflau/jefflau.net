---
title: GraphQL all the things?!
slug: /graphql-all-the-things
date: 2018-03-30
---

I've been recently introduced to the world of GraphQL and I'm loving it. The thing I like most about it is that it is a self documenting. So much so that I'd like to use it for more than just client to server interaction. GraphQL is supposed to be a query language for APIs, but APIs are not just a client to server relationship. Your app itself can create an API that does other things and it does not care where the data is coming from. An example of this is Gatsby.js that allows you to query Markdown files and build static html files from them. The advantage of using graphQL in this situation is that just by looking at the query you already know what your component is going to take and gives you a familiar interface to your data.

I'm about to embark on building a dapp for the Ethereum blockchain. If you know what that is, you'll know that most dapps don't have a back-end, which means bye-bye GraphQL. Or does it? I wasn't sure how to do use graphql without a client and a server. Turns out it's a lot easier than it sounds. I put a message out on Reactiflux slack a kind soul called [Tyler](https://twitter.com/slightlytyler) replied with not just words, but an entire slide show from his talk about this exact topic! He mentioned Apollo already had a library that is used for mocking your graphql server without actually making network requests. But you can use the same library to create a different type of graphQL link that allows you to graphql entirely on the client! It works because it just runs your queries like normal and instead of making network requests it just runs a bunch of functions that will 'mock' your resolvers. But you can put any code in there - even calls to Web3!

## Benefits of using GraphQL client side only

You can use GraphQL with an existing REST API! Of course you won't get the benefits of only one request for your data, but you can take advantage of the familiar GraphQL syntax and documented API and Apollo will deal with caching and optimistic UI for you!

You can use it with other non-HTTP type data, such as connecting to the Ethereum blockchain! This is the exact usecase I was looking to use it graphql for. I wanted to create a layer over web3 that will allow me to use graphql queries for my data.

You can easily mock out and generate test data with your graphQL schema. Apollo can even do this automatically for you!

It will be easier to migrate to a graphQL endpoint if one is created in the future as your app already uses GraphQL

## Closing thoughts

I haven't actually tried this yet, so it's all just theory right now, but theoretically it should work! If I was going to make a library to wrap Web3, the cost might be quite high as the API is in the middle of upgrading to 1.0. If anyone has any experience with client-side only graphql schemas and/or wants to implement web3 in GraphQL let me know!
