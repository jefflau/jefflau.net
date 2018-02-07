---
title: Why I am learning React Native
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
slug: /why-i-want-to-learn-react-native
date: 2016-07-06T06:20:36.980Z
date_updated:   2016-07-06T06:33:14.548Z
category: "tech"
author: "jeff"
tags: 
    - javascript
    - react native
---

##Write once, run everywhere doesn't work
I've been an advocate of Javascript Applications for native for a long time. Writing an app once and deploying to all devices makes sense in theory. There's less code to write and it's easier to maintain. Who wouldn't want 2 for the price of 1?

Hybrid frameworks, such as [Cordova](https://cordova.apache.org/) offer this kind of promise as they use a headless web view to allow you to deploy HTML apps to mobile. This means you can write your web app as normal, but it'll deploy to native devices. The user will think they are using a native app, but really they are just in a web browser. The problem with this idea is that the web view (within a native app) was never designed to give you the slick performance of a native app. Native apps have a responsive quality that you do not expect from web apps. But when you're running a web view without the head the way Cordova does, the user doesn't know he's not using a native app. Therefore if the user believes he is in a native app, he's going to be less forgiving to a clunky experience. It just doesn't *feel* right.

Cordova has the right idea, but we haven't got to the stage where browsers can leverage the responsiveness of native. I have experienced this first hand whilst building an [Ionic](http://ionicframework.com/) App that uses Cordova. You can read more about the performance benefits of React Native in [this comparison post](https://medium.com/react-id/ionic-framework-hybrid-app-vs-react-native-4facdd93f690#.esfo172dm)

Welcome React Native.

##Learn once, write everywhere

React Native's principles is about learning the framework once and then being able to write native Android and iOS apps using the same syntax. It's all written in Javascript so the API you will be learning is the same, but there are different UI components for both operating systems as the look and feel of an iOS app is different to that of Android. A key example of this is the back button. iOS doesn't have a hardware back button, so iOS developers deal with this in their application. However Android devices do have back buttons, so you have to deal with this in your logic as well as your UI. This doesn't mean you have to write your app twice though. Facebook reported that their Ads Manager application has [87% code reuse](https://twitter.com/brindelle/status/618114397098102785) between iOS and Android. If you write web apps already, you probably reuse less code trying to make your site responsive.


##I already know how to make web apps
React Native is all Javascript. So as a front-end developer you're already in a great position to creating mobile apps with React Native. You can use all the node modules you're used to using and the syntax is entirely familiar. I also have been using ReactJS for a while now and therefore I already know how the library works, I just need to learn the native APIs and components.

Native performance with familiar syntax? I'll take that.

##CSS for Layout

I've only ever experimented with layouts in Android, but I know I never want to do it again. The layout system was not very flexible and it was difficult to make fluid layouts. It may have changed since I tried Android development all those years ago, but now with React Native I can use my years of CSS knowledge to layout my app.

##Familiar workflow for faster iteration

Facebook has built-in support for live reload, hot reloading and debugging your Javascript in Chrome. It makes it super easy to jump into Native development without ever really touching Xcode or Eclipse. I just build it in Xcode and my emulator is live reloading whenever I make changes to code. Super cool! For web developers this is we're used to, but for native developers the iteration would be slower as you'd have to rebuild the entire Swift/Objective C project to see your changes.

##Faster deployment to App Store

Since React Native is Javascript, Apple will allow you to hot push fixes to your app without going through the normal approval processes. Anyone that has gone through this before will know how painfully long that process can be, so this is a big boon for developers who need to iterate quickly based on feedback/bugs from users.

##Making mobile apps is cool

Okay this isn't a really solid logical reason. It's probably more emotional. I've always wanted to make mobile apps, but I've never really wanted to invest the time into learning Objective C or Swift. Especially since I'd only be developing for iOS. With React Native it allows me to create apps in both environments with the same syntax. It's bringing the power of native to web developers and I for one am going to jump on that bandwagon.

##Where to start?

* [Official React Native Docs](https://facebook.github.io/react-native/)
* [Egghead React Native Fundamentals](https://egghead.io/series/react-native-fundamentals)
