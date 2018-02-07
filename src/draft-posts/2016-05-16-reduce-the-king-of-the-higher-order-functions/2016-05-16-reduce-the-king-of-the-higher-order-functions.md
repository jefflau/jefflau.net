---
title: Reduce - The king of the higher order functions
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
slug: /reduce-the-king-of-the-higher-order-functions
date: 2016-05-16T13:59:44.712Z
date_updated:   2016-05-16T14:16:30.486Z
category: "tech"
author: "jeff"
tags: 
    - javascript
    - functional programming
---

Functional programming has always interested me, but I've only picked up a few things that I use in my everyday development practice. One of those things is the standard functional array methods in Javascript. The functional methods return a new array instead of modifying the original array and include `map`, `filter` and `reduce`. Here are some overly simplified examples:

```js
//Using ES6 arrow function with implicit return
var array = [1, 2, 3]

array.map(x => x * 2) // [2, 4, 6]
array.filter(x => x > 1) // [2, 3]
array.reduce((accumulator, current) => a + c), 0) // 6

//I've left the console.log out for cleanliness, but you can wrap each function to see it log the expected values
```

For those that don't know what map, filter and reduce are, they are [higher order functions](http://eloquentjavascript.net/05_higher_order.html) that take another function and apply that function to every element in the list. So for this example when we use map, we are doubling the value of every element and returning a new array with the transformed values. For the filter example we are applying a conditional to each element, if this returns true, it is returned in the new array, otherwise it is left out. These functions are super useful, because they return a new array and so can be chained as follows:

```js
var array = [1, 2, 3, 4, 5]

var newArr = array.map(x => x * 2) // [2, 4, 6, 8, 10]
                  .filter(x => x > 3) // [4, 6, 8, 10]
                  .reduce((a, c) => a + c), 0) // 28

console.log(newArr) // 28
```
However after reviewing a short, concise and very resourceful course on [reduce](https://egghead.io/series/reduce-data-with-javascript) by [@mykola](https://twitter.com/mykola) on Egghead.io, which I implore you to check out. I finally understand what reduce is, and why it is the king of the higher order functions. In some other languages this might be called [folding](https://en.wikipedia.org/wiki/Fold_(higher-order_function))

Reduce is like the one ring that rules over all other higher order functions, because every other higher order function is an abstraction of reduce. They create conveniences that allow you to do a specific task, but if you need performance, or you need something even more specific, you can create it with reduce!

###Map vs Reduce

```js
var array = [1, 2, 3, 4, 5];

//map vs reduce
array.map(x => x * 2);

array.reduce((accumulatorArray, current) => {
  accumulatorArray.push(current * 2);
  return accumulatorArray
}, []);

```

This is how you would do a map with reduce. The important point to note here is the arguments that reduce takes. The first argument is the transformation function to be applied to every element, the next argument is the `initialValue`, which we pass the empty array. Then we push the new value to that array and return it. After the first time the transformation function runs, the array is no longer empty as we are pushing new values to it.

###Filter vs Reduce

```js
var array = [1, 2, 3, 4, 5];

//map vs reduce
array.filter(x => x > 1);
array.reduce((accumulatorArray, current) => {
  if(current > 1) {
    return accumulatorArray.push(current)
  }
}, []);

```

The way you would do filter is similar. Just like map you would add an empty array as the initial value and then `push` the new value if it passes the conditional.

### Why would you use reduce if you have map or filter?

Map or filter are great convenient functions and I use them all the time, but you may have a case where you are iterating over a very long array, and both map and filter need to loop over the entire array. With reduce you can do both the map and filter at the same time and save yourself looping twice. Here's an example

```js
//Let's make a really big array
var array = [];
for(var i = 0; i < 10000; i++) {
  array.push(i)
}

console.time('mapFilter')
array.filter(x => x > 5000) 
  .map(x => x * 2)
console.timeEnd('mapFilter')

console.time('reduce')
array.reduce((a, c) => {
  if(c > 5000){
    a.push(c*2)
  } 

  return a
}, []);
console.timeEnd('reduce')

//Copy this code into the console to see the speed difference!
```

[`console.time`](https://developer.mozilla.org/en-US/docs/Web/API/Console/time) is a very useful function that allows you to start a timer. It takes one argument, a label, which you will use to stop the timer.

I tried this for 100000 and 1000000 items and the reduce function becomes 10 times as fast when the array is that large. It's not something you always need to do, as the map/filter example reads nicer and it's much more obvious what the function is doing, but if you need some free performance, you can pull out a custom map/filter with reduce!

I've always used reduce to do simple things like sum up an array, but with this deeper understanding of reduce, I'm sure I'll start to use it for more complicated applications. If you want to know more about reduce, you can check out the [egghead course](https://egghead.io/series/reduce-data-with-javascript) that inspired this post or you can check out a framework like [redux](http://redux.js.org/), which takes reduce to the next level!

