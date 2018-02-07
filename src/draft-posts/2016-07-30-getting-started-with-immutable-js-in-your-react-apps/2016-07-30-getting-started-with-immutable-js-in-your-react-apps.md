---
title: Getting started with immutable.js in your React apps
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
slug: /getting-started-with-immutable-js-in-your-react-apps
date: 2016-07-30T07:21:59.025Z
date_updated:   2016-07-30T10:57:06.817Z
category: "tech"
author: "jeff"
tags: 
    - react
    - javascript
    - immutable
---

Immutablejs is a library by facebook to give your immutable data structures. I'm aiming to only cover the very basics to get you started in your next React application. Immutable is very easy to get started with. You only need to deal with two data types in the beginning, which are represent arrays and objects in JS: `Lists` and `Maps`. As any other npm library, `npm install --save immutable` to get started.
###Converting your data to Immutable data structures

The first thing you will need to do is to convert your data into JS. This could be static data, or it could be from an API. There's a couple ways you can do this, but the easiest way is to use the `Immutable.fromJS()` method. This deeply converts your JS Objects into Immutable data structures. All objects and arrays within the initial object or array will also be converted. So for instance in this example, the 'hobbies' property would be converted into a `Immutable.List` and every object within `people` would turn into `Immutable.Map`

```js
//fixtures.js
import Immutable from 'immutable';

const people = [
  {
    name: 'Jeff',
    age: 99,
    hobbies: ['climbing', 'pilates', 'slacklining']
  },
  {
    name: 'Leon',
    age: 100,
    hobbies: ['cycling']
  }
];

const immutablePeople = Immutable.fromJS(people);

export {
  people: immutablePeople
}
```


###Getting values from immutable data structures

The biggest difference between immutable data structures and objects/arrays is how you access their values. You can no longer use the dot notation. In this next example you can see I'm returning JSX to be shown inside a React component. Instead of simply doing `person.name` yo have to use the `.get` method to get a value within an object. Since `Lists` support the `Array.map` method, we can also use it to iterate through the `List` and return JSX. 

```js
import { people }  from './fixtures.js' //import the file we just made

let peopleShow = people.map(person => (
  <div>{person.get('name')}</div>
))

```

###Setting values on immutable data structures

Since you can't directly mutate a `List` or `Map` you will need to use the methods given to you. `Lists` have a lot of familiar methods, such as `push` or `pop`, but unlike their cousins, they don't mutate the list, they always return a new `List`. This works similar to using `Array.filter` or `Array.map`.

```js

let numbers = Immutable.List([1, 2, 3]);
let car = Immutable.Map({ wheels: 4, brand: 'ferrari'}):

let moreNumbers = numbers.push(4, 5, 6); // [1, 2, 3, 4, 5, 6];
let moddedCar = car.set('spoiler', true);
moddedCar.get('spoiler') // true

```

###Wrapping up

That's pretty much all you need to know to get started with Immutable. Immutable also has some other data types such as Sets, Stacks and Record, but they aren't necessary to learn right away. With what we've used above you can integrate this into React application easily and start to use the `componentShouldUpdate` lifecycle method to improve the performance of your React app. The React docs have an article on it [here](https://facebook.github.io/react/docs/update.html)


###Learning more

* [Official Docs](https://facebook.github.io/immutable-js/)
* [Egghead tutorial on Immutable](https://egghead.io/courses/learn-how-to-use-immutable-js)
* [Article by Richard Feldman on Immutable's JS interop](http://tech.noredink.com/post/107617838018/switching-from-immutablejs-to-seamless-immutable)

