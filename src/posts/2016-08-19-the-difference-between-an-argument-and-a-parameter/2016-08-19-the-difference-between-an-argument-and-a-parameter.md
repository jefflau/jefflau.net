---
title: The difference between an argument and a parameter
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
slug: /the-difference-between-an-argument-and-a-parameter
date: 2016-08-19T14:35:52.637Z
date_updated:   2016-08-19T14:35:52.631Z
category: "tech"
author: "jeff"
tags: 
    - javascript
---

As someone that teaches Javascript day-in-day-out, I know this is one of the most confusing parts of programming. Most of my students don't know the difference, and it doesn't hurt them, but it can definitely help your understanding of programming if you learn this distinction earlier on. Many of my students get confused when you pass a function arguments that are variables, and those variables are named the same as the parameters. Which variables are now safe to change the names of? When explaining why you can change the name of the parameter, without affecting the program, I need my student to understand what the difference is. So what is an argument and what is a a parameter?

A parameter is a local variable in the declaration of a function. In Javascript you can define parameters inside the parenthesis in your function declaration.

An argument is the value or data you pass **to** a function when you call it. This can be  any kind of data, including other variables.

##Example:

```js
function add(a, b){
  return a + b
}
//a and b here are parameters

add(1, 2)
//1 and 2 here are arguments

var a = 1
var b = 2
add(a, b)

// a and b here are arguments

```

Since the arguments here are named the same as the parameters, this can get confusing to what variables you can change the name of without messing up your code. In this situation, we can safely change the add parameter names to something else and it will still work as expected:

```js
function add(num1, num2){
  return num1 + num2
}
```

Knowing the difference between an argument and parameter isn't such a big deal when you're coding on your own. But it can make a difference when explaining things to other developers. Most of the time they are used interchangeable, and most of the time they *can* be used interchangeably. You can say "This function **takes** 3 arguments" and "this function **has** 3 parameters". These effectively mean the same thing, and all we needed to do was change the verb to actually use them correctly.

An example of when this is important in Javascript, is when a function can take more arguments than parameters. This happens a lot in Javascript and we deal with it using the `arguments` keyword inside functions, or the rest operator `...args`. Consider the following piece of code:

```js
function addAllThenLog(message, ...args) {
  let sum = args.reduce(a, b => a + b)
  console.log(message)
  return sum
}

function addAllThenLog('added all the numbers bro', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
```

In this situation, the function only has 2 parameters, but we've passed it 11 arguments in total. You can't say I called the function with 11 parameters and you can't say the function takes 2 arguments, because as you clearly see, it can take as many arguments as you want it to take. Semantics matter.
