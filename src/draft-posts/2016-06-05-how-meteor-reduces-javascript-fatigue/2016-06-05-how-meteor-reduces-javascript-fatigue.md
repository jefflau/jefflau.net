---
title: How Meteor reduces Javascript fatigue
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
slug: /how-meteor-reduces-javascript-fatigue
date: 2016-06-05T04:40:48.231Z
date_updated:   2016-06-05T04:47:22.627Z
category: "tech"
author: "jeff"
tags: 
    - meteor
    - javascript
---

About two years ago I heard about [Meteor](http://meteor.com/). As a front-end developer it taught me a lot about how to be a full-stack developer, but from a much more beginner friendly route. After several months of using Meteor, I moved away from it for a while as I started to learn some of the up and coming frameworks, such as [React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/). However Meteor never had proper support for React, as it didn't have proper support for NPM modules. That's all changed now, they've added support for NPM and made it much easier to sub out blaze for React, so I've decided to give it another go!

Its been about two weeks now and it's been fun, but ultimately its been soothing. The amount that Meteor helps you with is astounding. It might irritate a developer that wants to control everything, but for me the pros definitely outweigh the cons. They've fixed problems like global variables by adding proper support for ES6 modules. They've also essentially deprecated Atmosphere, the Meteor packaging system and allowed Meteor developers to import from the great node ecosystem by using NPM. All in all, its great to be able to use the tools I want, such as React, but within a system that stops being feeling the #JavascriptFatigue. Here's some of things it does to mitigate the fatigue:

###It has its own build tool

Meteor ships with its own build tool that builds any JS file it finds within your project. With its new import system, it uses the folder structure to determine which files it builds and which it doesn't. This works great as you don't need to spend time setting up Gulp or Webpack. You just drop in files, and it will auto-build them for you and serve them up in your local server. You don't even need to include your CSS, it will also do that for you automagically. To create some structure you can use the `imports` folder, which won't be built automatically and you can use the ES6 `import` syntax to pull in your own modules or modules from NPM. 

If you want fine grained support for your tooling, Meteor may not be for you. If you want more than what it gives you, it will be difficult to get that working. Out the box it already supports Babel (and by extension React), all your favourite preprocessors and Coffeescript. In addition to compilation it also has a livereload functionality built in, and runs a local server for you when you run `meteor` on the command line.

###The database is ready to go with no setup

By trade, I'm not a backend developer, but I still want to be able to build the whole stack sometimes. So when I want to build an app from front to back, its nice to be able to lean on the framework to get things going. Meteor allows you to start cranking out front-end code that inserts into a persistent database without actually having to do any database setup yourself. It's kind of like [Firebase](https://firebase.google.com/), but self hosted. All you need to do to get going is to create a Mongo collection by doing:

```js
const Messages = Mongo.Collection('messages');
Messages.insert({text: "Hello, world!"});
```

That's it! You've already inserted some data into the database! 

###It allows you to extend out your server code easily

If you've ever used Firebase, you'll know how quickly and easily it is to get setup and start building your app. Its claim is to help you build apps without any server code. But what if you need server code? Meteor has you covered. Building out server-side logic is easy as writing your front-end code. You just create a folder called `server` and those files will only be loaded onto the server. This makes it easy to do any logic you don't want the client seeing, such as API keys or other private data. 

###It has accounts built-in

No one wants to build an accounts system from scratch and Meteor for a very long time has shipped with support for not just username and password, but all the major social networks. This allows you to get going straight away and building your app, and if you need to you can easily extend the functionality of the built-in accounts systems.

###Conclusion
There are many things that still need to be improved on in Meteor, and they're trying to do that now with [Apollo](http://www.apollostack.com/), but there is still a lot of great things about Meteor. With the loosening of the walled garden and the integration of the great node ecosystem, you now have more of an option to customise Meteor with NPM modules and choose what you want to do with the front-end.

As a front-end developer who has been using React for the past year, coming back to Meteor has been a breath of fresh air. I can build my front-end the way I want, but with the easy setup Meteor provides. It allows me to start writing my applications quickly, without spending hours setting up babel, webpack, livereload, a node server and more. Sometimes you just need a framework to have your back, and Meteor does that and more. It empowers developer to write application code, not spend hours on tooling.
