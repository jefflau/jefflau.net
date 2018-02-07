---
title: Decrypting the ever-complicating Front-end web development stack
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
slug: /decrypting-the-ever-complicating-front-end-web-development-stack
date: 2016-05-04T05:50:39.106Z
date_updated:   2016-05-11T11:31:45.954Z
category: tech
author: "jeff"
tags: 
    - javascript
    - front-end
    - non-technical
---

==*Note: This post is going to be long and it's going to be comprehensive. Last updated 2nd May 2016  *==

Front-end development is hard. And it's getting harder all the time, but what do you really need to know? The technology stack we need to know expanding exponentially, with no sign of letting up.

To make this easier, I've compiled a list of the things that front-end developers can and should learn. The higher they are up the list the more important I feel they are to your job and profession. I've added a recommended tag to the ones I believe to be the most important. This is a mixture of my opinion, what the community has *selected*, the future implications of that tech and what companies are looking for job wise. Other developers may have differing opinions, but that's what makes our little niche industry so much fun to be in. Enjoy.

##Contents

* [Basics](#basics)
* [Responsive Web Design](#responsivewebdesign)
* [CSS Preprocessors](#csspreprocessors)
* [Templating Languages](#templatinglanguages)
* [Version Control](#versioncontrol)
* [Transpilers](#transpilers)
* [Task Runners](#taskrunners)
* [Module Bundlers](#modulebundlers)
* [Package Managers](#packagemanagers)
* [Command Line](#commandline)
* [Utility Libraries](#utilitylibraries)
* [Full Javascript Frameworks](#fulljavascriptframeworks)
* [View Layer Frameworks](#viewlayerframeworks)
* [Data Layer Frameworks](#datalayerframeworks)
* [Full Stack/Isomorphic Frameworks](#fullstackisomorphicframeworks)
* [Javascript as a compile target](#javascriptasacompiletarget)
* [Back-end as a Service](#backendasaservice)
* [Mobile App Frameworks](#mobileappframeworks)
* [Decentralised Application Development](#decentralisedapplicationdappdevelopment)
* [Wrapping Up](#wrappingup)


##Basics
* HTML recommended*
* CSS recommended*
* JavaScript recommended*
* DOM scripting recommended*

Everyone has to start at the basics and these are it. Once upon a time one could be proficient in just these few and that was enough to be a front-end developer. Now they are just the basics, the foundations, the pillars on which all your other skills will be based on. Some of you may have jumped straight into jQuery without really knowing Javascript. I did the same thing myself when I first started. A lot of us start learning jQuery as if it is synonymous with Javascript, but it isn't. If you are going down this path, you should turn around immediately and read [Eloquent Javascript](http://eloquentjavascript.net/) and really get to grips with the language and basic programming before proceeding. A strong foundation of Javascript is more important than ever before as it's the foundation for all the additional front-end tech that has been developed over the last 5-10 years.

##Responsive Web Design

* [Responsive Web Design](http://alistapart.com/article/responsive-web-design)

Responsive web design (RWD) is the concept of a website responding to the browser in which it is being viewed on. If it is a mobile device the design will morph into a layout for smaller devices. RWD uses CSS media queries, which are a conditional statement in CSS that can respond to changes in width, height and other properties. They are super powerful and make creating responsive layouts a breeze.

Responsive design started with Ethan Marcotte, who wrote the article linked above in the well known web design magazine [A List Apart](http://alistapart.com/article/responsive-web-design). Since then the idea has evolved, but the concept remains the same and a solid understanding of these concepts in essential to any junior web developer.

##CSS Preprocessors
* [Sass](http://sass-lang.com/)
* [LESS](http://lesscss.org/)
* [Stylus](http://stylus-lang.com/) recommended*
* [Post CSS](https://www.smashingmagazine.com/2015/12/introduction-to-postcss/) recommended*

CSS preprocessors are a staple these days and it is a must to learn at least one of these. They are all pretty similar to one another and there isn't a clear winner. People were using LESS at the beginning, because of Twitter and their CSS framework Bootstrap (now separate from Twitter). These reasons have largely become irrelevant and I have settled on using Stylus as it allows the flexibility to write my code however I want (it supports both Sass and SCSS syntax) and pretty much all of the Sass/LESS features, and to top it off it uses a Javascript compiler, which means that you don't have to worry about installing other languages. This is a pain if you have to just install Ruby to compile your Sass. The last one on the list is PostCSS, it's like a preprocessor on steroids, that allows you to build your own preprocessor. It can look just like your Sass, LESS or Stylus with the right plugins, so if you really want to take custom CSS to the next level PostCSS is the way to go. It uses Javascript to build the plugins so it's easy to go and make your own plugin if there isn't one that suits your needs.

##Templating languages
* [Handlebars](http://handlebarsjs.com/)
* [HAML](http://haml.info/)
* [Jade](http://jade-lang.com/) recommended*
* [EJS](http://www.embeddedjs.com/)
* [ERB](http://www.stuartellis.eu/articles/erb/)

Templating languages are similar to CSS preprocessors, they allow you to use features in HTML that don't exist in the language. Some languages such as Jade or Haml allows you to write terser HTML without closing tags, which ends being much quicker to write. Your templating language will take in the data either on the server or on the client and then compile it into HTML dependent on the data, hence 'templating' language. They can help you to reuse code with partials or modules for duplicated elements such as your header or footer and also allow you to execute some limited logic such as conditonals or loops within the template.

Templating languages are from a time where most of the logic code was on the backend, and there were less Single Page Applications (SPAs) around. I myself have learnt a few of them, but I use them less and less these days as creating client-side heavy applications is more the norm. If you are going to learn one, I'd learn Jade as it's the normal templating language to lean on when creating a node.js application. If you're throwing up a quick marketing site, sometimes it's just easier to use a templating language rather than a full blown framework and its far nicer to use Jade than HTML.

##Version Control
* Git ***recommended**
* ~~Subversion~~
 
Git allows you to create repositories of code. Each repo is constructed out of commits, which form a kind of tree. You can 'branch' off at any time and merge back into the main branch when you are finished with your module. The benefits for this is that you don't have to worry about breaking the main code. Version control becomes more powerful when you are working in a team. With FTP it is very easy to overwrite someone else's code, but version control stops that happening with merge conflicts forcing the user to resolve these conflicts before he can add his code to the repositories.

Version control is a must. Gone are the days we could rambo into our server with FTP and upload our sites. The community has decided that git is the defacto winner of the version control war. There is no other option.

##Transpilers
* [Babel](https://babeljs.io/) recommended*
* [Typescript](https://www.typescriptlang.org/)
* [Traceur](https://github.com/google/traceur-compiler)
* [Coffeescript](http://coffeescript.org/)

Transpiling is when you transform a language into another language with a similar level of abstraction.
 
For years, front-end developers have leaned away from transpilers and only a select few were using coffeescript to develop with. You were either entirely in the coffeescript camp or not at all. However in the last few years we've seen the rise of the next version of Javascript called ES6 (ECMAScript 6), or known more formally now as ES2015(6)/2016(7). This has given rise to transpilers such as Traceur and Babel, which compile your ES2015 code into ES5 (the stable version of Javascript), allowing new features to be used today. The transpile step itself has also become much more easier to manage with the widespread adoption of task runners to automate our front-end workflow.

##Task Runners
* [Grunt](http://gruntjs.com/)
* [Gulp](http://gulpjs.com/) recommended*
* [NPM Scripts](https://docs.npmjs.com/misc/scripts)
* [Webpack](https://webpack.github.io/)
* [Codekit](https://incident57.com/codekit/)

Task runners are a must to learn as front-end developers as we have so many tools that we need to run repeatedly. We needed something to automate all these tasks. This is where task runners come in, they help to compile our code, minify it, run local servers, almost anything you can think of to run manually you can run automatically with a task runner. Grunt was one of the first, but it's starting to die now as the performance doesn't quite match up to other runners such as Gulp. For smaller projects, sometimes it's even suitable to just use NPM scripts to run your build and recompile your Javascript and CSS. However with larger builds, you'll watch to add a more powerful and fully featured task runner.

##Module bundlers

* [Webpack](https://webpack.github.io/) recommended*
* [Browserify](http://browserify.org/)
* [SystemJS](https://github.com/systemjs/systemjs)
* [Rollup](http://rollupjs.org/)

Module bundlers allow us to do two important things when writing javascript. First, it solves a very real problem with maintainability in Javascript. Previously if we wanted to separate our JS into separate files, we'd have to add another script tag. This is bad for many reasons, but the biggest reason is for every script tag we add, it's one more HTTP request to the server, increasing the overall load time. Bundlers allow you to work in separate files, but will concatenate all your code into one file reducing the requests significantly. Each file will also retain its own scope so you won't have issues with global variables.

The second thing that they allow you to do is  to leverage [NPM](https://www.npmjs.com) (Node Package Manager) in your Javascript files, which will allow you to *import* a library into a file without polluting the [global namespace](http://stackoverflow.com/questions/8862665/what-does-it-mean-global-namespace-would-be-polluted) (which is what you do when you include libraries such jQuery as a script tag in your html page).

##Package Managers
* [NPM](https://www.npmjs.com) recommended*
* [Bower](http://bower.io)
* [JSPM](http://jspm.io)

Packager Managers do more than just allow you not to pollute the global namespace though. Node has had NPM for a very long time, but with the addition of module bundlers, we can use these node packages on the front-end which makes it easy to use some Javascript libraries that were initially designed for node. Bower has also been a very popular front-end package manager. It allows you to add packages to your project through their command line tool and update/delete them if necessary. However with the ever-growing popularity of module bundlers, it has become more common place to add packages via NPM and not to use multiple package managers, although I have used both in a single project.


##Command Line
* [Command Line Crash Course](http://cli.learncodethehardway.org/book/)
* [Terminal](https://en.wikipedia.org/wiki/Terminal_(OS_X)
* [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell))

Learning how to use the basics of the command line are essential for a front-end developer. It has been known many a front-end developers would hide in the corner and cry when we had to interact with the terminal (OSX). But now we must be capable. The reason for this is, most of the previous tools I've mentioned; Module bundlers, Task runners, Transpilers: they all use Command Line Interfaces (CLIs) to interact with them. Having a basic knowledge of the command line will allow you to be unafraid.

##Utility Libraries
* [jQuery](https://jquery.com) recommended*
* [Underscore](https://jquery.com)
* [Lo-dash](https://lodash.com) recommended*

I've clumped these libraries together, however they do very things. jQuery is famous for its cross browser DOM scripting API, but also for its cross browser Ajax calls and more. Many developers start with a library like jQuery as it has very simple, but powerful animation features. It is also one of the first libraries to popularise the [method chaining](https://en.wikipedia.org/wiki/Method_chaining) in Javascript, which is a powerful object-oriented programming concept. 

Underscore and Lo-dash operate in the same field and give you access to powerful utility functions to sort and manipulate your data. Both are used often in both Javascript front-end and back-end development. They give you a taste of what functional programming is like in Javascript

##Full Javascript Frameworks
* [Backbone](http://backbonejs.org)
* [Angular](https://angularjs.org)
* [Ember](http://emberjs.com)
* [CycleJS](cyclejs)

Full Javascript Frameworks have opinions about everything you do in your application, from your view layer, to the way you structure your application and may give you utility functions to make API calls or do routing. There is no hard definition of a full Javascript framework, however these frameworks largely can be used standalone without a lot of extra plugins or packages.

Front-end frameworks were first popularised by Backbone, which showed us a way of getting away from the [spaghetti code](https://en.wikipedia.org/wiki/Spaghetti_code) we were writing with jQuery. It introduced us to structure in front-end frameworks that forced maintainability and readability. Although backbone has lost the spotlight, it still remains a figure head for the Javascript framework revolution. Front-end developers are no longer writing HTML CSS and jQuery glue code for slider plugins, we are proper programmers that need a solid understanding of Javascript. And so from that revolution the next age of the single page application was born. 

In the years proceeding Backbone, two titans arose from the golden age of SPAs. They were Angular and Ember. One backed by the giant that is Google, and one founded on the same principles of another popular framework, Rails. Angular and Ember went head to head for many years, with no clear winner. However whilst war was being waged between the two titans of the Javascript framework world, an unlikely challenger would pull the carpet out from under both of them. That challenger was React.

##View Layer Frameworks
* [React](https://facebook.github.io/react/) recommended*
* [RiotJS](http://riotjs.com)

View layer frameworks deal with only the view, how it is updated and displayed. It makes no assumption about how your application should be structured and these frameworks can fit into a larger framework such as MeteorJS or Angular. Most modern view layer frameworks follow in React footsteps with one-way data flow, [Virtual DOM](http://tonyfreed.com/blog/what_is_virtual_dom) and reacting to data changes instead of forcing the developer to write the code to update the UI.

The development of front-end frameworks before React came a long was based on the idea of two-way data binding. React was one of the first frameworks to bring the idea of one-way data binding with uni-directional data flow. React is built out of a tree of components and data can only flow down this tree. To update data in the parent, it can only invoke a callback function, which has been passed down this tree as data.

The invention of the Virtual DOM has allowed us to develop as if we had a 'refresh' after the state of an application has been updated. The Virtual DOM allows you to easily [diff](https://en.wikipedia.org/wiki/Diff_utility) the difference between the two and make the least amount of DOM updates. Developing with a refresh button takes the effort out of updating the DOM directly (which could be costly if done incorrectly). In addition to the Virtual DOM and one-way data flow, React has changed the way many of us write our applications, not only because of React, but because of the ideas that have developed around it. These include [Object Composition](https://en.wikipedia.org/wiki/Object_composition), [Functional Programming](https://en.wikipedia.org/wiki/Functional_programming) and managing state with [Flux](https://facebook.github.io/flux/docs/overview.html) it brought with it. Thanks Facebook.

##Data layer Frameworks
* [Flux](https://facebook.github.io/flux/docs/overview.html)
* [Redux](https://github.com/reactjs/redux) recommended*
* [RxJS](https://github.com/Reactive-Extensions/RxJS)
* [BaconJS](https://baconjs.github.io)

With the back-end becoming more and more skinny and the front-end becoming richer and fatter we have started to need frameworks that manage this data. Redux is a offshoot of the Flux architecture created by Facebook for their view framework react. It allows you to separate your data from your view layer. It can be implemented seamlessly with React or any other view framework that 'reacts' to data changes. It is inspired by [Elm](http://elm-lang.org/) and uses functional programming concepts such as [immutability](https://en.wikipedia.org/wiki/Immutable_object) and [pure functions](https://en.wikipedia.org/wiki/Pure_function) . Redux gives you a structured, predictable way to deal with state in your application abstracting away from the React components themselves (or other view layer).

RxJS is a different beast altogether that becomes powerful when your application requires lots of asynchronous calls that depend on each other. RxJS takes functional programming to the next level and follows the [functional reactive programming](https://en.wikipedia.org/wiki/Functional_reactive_programming) paradigm or FRP. It allows very powerful control over streams of data allowing you to `map` `filter` and `reduce` over data that comes in over time. It creates a new kind of object to achieve this, which is called the [observable](http://reactivex.io/documentation/observable.html).

Both these kinds of frameworks were born out of a need to have structured frameworks to deal with the event driven interfaces of today's web application landscape. Those events can either be user events (such as clicks or form submission) or events in the form of data from a server. both of these frameworks allow you to 'subscribe' to these changes and 'react' when something updates. It is the new paradigm for the advanced Javascripter.

##Fullstack/Isomorphic Frameworks
* [Meteor](https://www.meteor.com/) recommended*
* [Derby](http://derbyjs.com/)

Fullstack frameworks are an evolution of the way we create web apps. Since Javascript can used on both the client and the server, it was only a matter of time that a framework would try and allow you to share code between the client and the server. 

Meteor supplies a powerful API that allows you to access the database on the client with their [MongoDB](https://www.mongodb.org/) API. On the client they use a browser implementation of mongo called Mini Mongo, which caches a subset of the database in the client to allow the user's input to appear on the screen instantly. In reality, at the same time Meteor is updating the database on the server. When the requests comes back to the client it checks if there are any discrepancies and if there are it uses the server as the source of truth.

Meteor has a lot of funding behind its open source business model, which means that it is a good bet when thinking about what kind of open source frameworks you want to invest your time into learning. Derby, the other isomorphic framework listed here seems to have lost steam and therefore I wouldn't recommend putting the time into it.

##Javascript as a compile target
* [Elm](http://elm-lang.org/)
* [Clojurescript](https://github.com/clojure/clojurescript)

Javascript has never had all the language features that developers want. If the new versions of Javascript aren't enough for you you can always try to learn one of these two languages that compile directly into Javascript. They are a step further than transpilers as they are largely leaving behind the ideas of Javascript and are only using Javascript as a compile target. 

ClojureScript is a lisp, a family of programming languages that at first glance look like they're overusing brackets. However once you get used to the syntax, it gives your a powerful high level programming language that focusses on functional concepts such as immutability. It can be used on both the client and the server (as it compiles to Javascript) so similar to javascript there is not need to context switch. It also has popular libraries such as Om, which wrap ReactJS giving Clojurescript developer access to one of the most influential frameworks of all time.

Elm is another language that is also a kind of front-end framework. It has a Virtual DOM like React, and has a static type system that will help you to avoid errors. It takes syntactical inspiration from Haskell and has influenced frameworks such as CycleJS and Redux, which are other functional frameworks. It also uses the Functional Reactive Programming paradigm in a similar way to RxJS. Elm has an answer to the entire front-end development stack and therefore you can think of it as a complete replacement to your HTML/CSS/JS stack. 

##Back-end as a Service
* [Kimvey](http://www.kinvey.com/)
* [Firebase](https://www.firebase.com/)
* [Parse](http://parse.com/)

Backend as a Service (BaaS) providers give you access to an easy to use Rest API that your front-end can connect to and make updates to. It has become more popular as developers can create their apps without writing a back-end. For applications that don't have a lot of complex logic in the back-end, platforms such as Firebase could save developers a lot of time. It also allows you to hook up multiple different front-ends (such as your iOS or Android app) to the same backend without too much difficulty. The downsides of BaaS is that they often cost a lot more when you scale up than a normal server would and therefore hasn't become as popular as it could have been. However platforms like Parse, which was formerly a paid service but has been released as open source by Facebook, could be one of the easiest ways to get your app up and running.

##Mobile App Frameworks
* [Cordova](https://cordova.apache.org/)/[Phonegap](http://phonegap.com/)
* [React Native](https://facebook.github.io/react-native/) recommended*

As Javascript developers we have more and more powerful tools available to us and one of those is tools such as Cordova and React Native, which essentially allow us to write mobile apps with Javascript. This means we can share most of the functionality of our web apps directly with our mobile app. It isn't perfect, but it definitely is good enough for simple apps that don't need true native performance.

With React Native, we gain even more performance as instead of using a headless browser it instead uses the native UI components and controls them with Javascript. However it also means we still have to write different apps based on the platform, but React Native allows us to write in the same framework regardless of the platform we are developing for. You write the same app more than once, but you can also share application code when necessary.

##Decentralised Application (DApp) development
* [Ethereum](https://www.ethereum.org/)
* [Lisk](https://lisk.io/)

I threw this one in for fun as it's something I've began getting into recently. There are very few job prospects out there for DApp developers in comparsion to normal web developers. But if you want to be part of the bleeding edge. This is it.

Ethereum and other copy cats are general purpose blockchains. For a high level overview of blockchains or Ethereum you can read my other posts on my blog: [What is Ethereum?](http://jefflau.net/what-is-ethereum/) and [Explaining the blockchain](http://jefflau.net/explaining-the-blockchain-the-foundation-of-ethereum/). In short they are a general purpose peer-to-peer network (similar to torrents) that will allow you to create applications that do not run on a central server, but on all the nodes of the network. As a front-end developer we already know half of what we need to create a DApp and it will allow us to create even more innovative, resilient applications than ever before.

##Wrapping up
Front-end development is so much more than it was 10 years ago. It has evolved into a behemoth of technologies that are getting evermore complicated. We have created tools to simplify the complication, but more tools, also increases the amount we need to learn. Things change on a daily basis with new libraries coming out all the time. 3 years ago, Angular was king, now it's React, tomorrow who knows? The front-end landscape isn't just linear anymore, we have different languages we can write like Clojure or full-stack frameworks that simplify the entire application development process. We are in a transition. Front-end developer no longer exist. We are application developers and the front-end/back-end divide is becoming more and more blurry. As our profession, we must stay up to date. Do not get left behind soldier.


Keep calm and carry on learning.
