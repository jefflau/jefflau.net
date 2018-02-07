---
title: What I've learnt in week 3 of React Native
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
slug: /what-ive-learnt-in-week-3-of-react-native
date: 2016-07-19T08:36:31.952Z
date_updated:   2016-07-19T17:46:53.276Z
category: "tech"
author: "jeff"
tags:
    - react native
---

This follows on from my previous post [What I've learnt from 2 weeks of React Native](http://jefflau.net/what-ive-learnt-from-2-weeks-of-react-native/). These posts will read like personal notes from what I've learnt and what I wish I knew before going into this week.

###Use Trailing commas in your StyleSheet Objects
Unless you need to support IE8, most modern JS engines support the trailing comma at the end. Because we're building native apps, using the phone's JS engine, we don't need to worry about that! Since you'll be changing this object a lot, cutting styles to put somewhere else, adding new styles etc... I think it's good practise now to add a trailing comma to these objects as it will save you a lot of time 'forgetting' these commas. I also learnt this the hard way as I've been hard coded to not add the trailing comma at the end of a JS object for compatibility reasons. It'll feel weird at first, but it will be worth it.

###Lodash is your friend
With CSS you have some properties that you never knew you relied on that much, until you need to replace that functionality in JS. Things such as `{ textTransform: capitalize }` don't exist in React Native's version of CSS. Lodash has your back here. Instead of doing some vanilla JS to do some string slicing, you can just use the capitalize method for a quick one liner: 

```js
<Text>{_.capitalize('jeff')}</Text>
```

This makes it as easy or easier than doing the CSS version of that, which you can't use anyway so forget about it!

###[React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
If you're used to using [Ionicons](http://ionicons.com/) or [Fontawesome](http://fontawesome.io/), don't fret, this package has you covered. It installs some native code to get it working so you'll need to use `rnpm link` to get it going. After that it's easy as including the Icon in your code and using the component:

```js
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="rocket" size={30} color="#900" />)
```

###RNPM - React Native Package Manager

In React Native there are two kinds of packages. Pure JS packages such as `lodash` that don't use any native functionally and hybrid packages that use both JS and native such as `react-native-maps` or `react-native-vector-icons`. To get these to work properly in your app you either need to link up these packages to your iOS/Android project manually or you can let RNPM do all the work for you! It's as simple as:

```bash
$ rnpm link <package name>
```

Basically if you're a web developer like me and you don't want to touch that scary looking native stuff, RNPM is your friend. It's so core to the project, that it has already been [integrated into React Native Core](https://github.com/rnpm/rnpm/issues/189) so in the future the command will be `react-native link`.

###`rnpm unlink` must be done if you ever need to uninstall a native package

I learnt this the hard way. React Native is bleeding f**king edge and some packages don't work with the latest version of React Native or have bugs. If you have to uninstall one that needed to be linked using `rnpm` then you need to reverse it by doing `rnpm unlink` or you'll get errors. Simple.

###Images are weird
To import into both Android and iOS your image urls need to be statically analysed. Therefore you can't do something like this `<Image source={require(../img/ + imageName}`. That's a dynamically generated url and the way they package the images, you need to have a static address for the image to load in properly. This is feels quite alien and I hope it will be fixed soon as not being able to programmatically create your image urls strings means I end up with code like this:

```js
export default function getMainImage(gym){
  switch(gym){
    case 'stone':
      return require('../img/stone/main.jpg')
    case 'redrock':
      return require('../img/redrock/main.jpg')
    case 'civic':
      return require('../img/civic/main.jpg')
    case 'neihu':
      return require('../img/neihu/main.jpg')
    case 'y17':
      return require('../img/y17/main.jpg')
    case 'xinyi':
      return require('../img/xinyi/main.jpg')
  }
}
```

Not especially nice. However it still beats having to individually include images in both iOS and Android and having to deal with Xcode.

Images from the web are super easy to include so if you're using a back-end API for your app, this won't be a problem. This is for images that you want to bundle with your app.

###This is a badass introduction to React Native for those that know React

This is a 2 hour stream with an experienced React Native developer teaching a react developer how to get productive in React Native. If you already know React, it just boils down to getting a hang of the `Navigator` component (which is similar to the HTML5 history api) and learning Tabbed navigation (with nested history).

###React Native is fun
I've been listening to the [React Native Radio](https://devchat.tv/react-native-radio) podcast recently and in one of the [episodes with the Microsoft team](https://devchat.tv/react-native-radio/21-code-push-in-depth-and-react-native-tooling-with-the-microsoft-team) they talk about React Native being focussed on two things. DX and UX. Developer Experience and User Experience. And when you think about it, it's so true. React Native is a development of the Cordova, Hybrid app movement, but moving towards a more User friendly buttery smooth experience for apps. But it's not forgetting developers, with hot reloading out the box, almost no need to touch Xcode, debugging directly in Chrome. It's just fun and I hope you try it soon.

https://www.youtube.com/watch?v=r5OPRhelEIU
