---
title: What I've learnt from 2 weeks of React Native
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
slug: /what-ive-learnt-from-2-weeks-of-react-native
date: 2016-07-13T16:24:30.173Z
date_updated:   2016-08-02T11:33:01.728Z
category: "tech"
author: "jeff"
tags: 
    - react native
    - mobile
    - react
---

###CSS Layout is not the same
You have access to the same flexbox features to do flexible layouts, but all other measurements have to be done in dip (density independent pixels), which are similar to pixels. This means there are no ems, rems or percentages. This means you'll have to do some maths with the device dimensions to get some of the layouts that flexbox can't do on its own. 

There are some other gotchas that you learn pretty quickly as well, such as `<Image>` doesn't automatically have a height or width. So you have to specify their dimensions to get anything to actually show up... This tripped me up a few times coming from a web development background as images automatically take their width and height from the image.

###There are no media queries

Following on from the last point, you don't have access to media queries in CSS and you'll have to  use a library such as [React Native Media Queries](https://github.com/alpacaaa/react-native-media-queries) to have media queries in your styles.

###Redux works perfect with React Native

Redux itself is nice and self contained and everything that you would expect to use with Redux in other react apps are available in React Native. Redux assumes nothing about your stack, so you can slow Redux and many of the go-to packages such as `redux-thunk` and `redux-logger` with React Native.

###Use [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) for routing

I initially did some tutorials that were outdated that used the NavigatorIOS component, which I swapped out for the more general `Navigator` Component, which can be used for both Android and iOS. However I quickly realised there was already a higher order component community package that wraps the Navigator component and provides a nicer API called [`react-native-router-flux`](https://github.com/aksonov/react-native-router-flux). It uses the lower level Navigator component under the hood and allows you to create your routes using nested components like you may be used to with `react-router`. Learn the basics of Navigator and then quickly switch over to this great library. It also works great with Redux, which is one of the reasons why I switched over. 

###React Native is not Node. HTTP requests have to be done with `fetch()`

I learnt this the hard way whilst trying to install a package that did not use fetch and I was getting errors that I didn't know how to fix. React Native uses nodeJS to get up and running, but it doesn't actually use nodeJS at runtime, so it doesn't have access to some node APIs such as `request`. You have to be mindful of this when installing node dependent packages.

###Check the UILibrary App by Facebook for inspiration

The UIExplorer is an example app that can be downloaded and run by cloning the `react-native` repo. It has examples of all the components provided by React Native, so it's a really great way to learn what components are out there and what they do. There is a simulated version on [reactnative.com](http://www.reactnative.com/uiexplorer/), but I'd check out the app on your device if possible to see the silky smooth animations!

###Sharing your React Native app is hard... unless you use React Native playground!

React Native has solved a lot of the hassle of mobile development, by very quickly allowing you to see your changes hot reload into the simulator. However that's only one part of development. What about when you need feedback on your app from other people? Mobile apps require you to download the app and the feedback loop is just way longer than web developers are used to. [React Native Playground](https://rnplay.org/) allows you to do this with relative ease. You can link your app via a git repository. Then your tester can justdownload the React Native Playground app. Then they go to your app on the site scan a QR code using their phone. That will download and run the app within the React Native Playground App without you having to download a separate app! In addition to that they have integrated [Appetize.io](https://appetize.io/) into their platform so you can see an in browser version of the app as well as use their in-browser  editor to change your inline! Think of it like codepen for React Native! Super. Cool. Stuff.

![React Native Playground screenshot](/content/images/2016/07/Screen-Shot-2016-07-14-at-00-10-43.png)

I've had a lot of fun playing with React Native the last couple of weeks. Now it's time to put what I've learnt into making a small app to consolidate what I've learnt!

*Edited 14 July 2016: Fixed some factual inconsistencies related to Views not having heights*
