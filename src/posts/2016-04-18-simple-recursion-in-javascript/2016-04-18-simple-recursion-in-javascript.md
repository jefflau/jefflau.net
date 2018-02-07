---
title: Simple recursion in Javascript
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
slug: /simple-recursion-in-javascript
date: 2016-04-17T16:47:40.430Z
date_updated:   2016-04-17T16:56:13.290Z
category: "tech"
author: "jeff"
tags: 
    - javascript
    - functional programming
    - technical
---

A good friend of mine is a Lisp convert, he codes mainly in Clojurescript, a flavour of Clojure that compiles into Javascript, allowing you to create front-end and back-end applications in lisp. Now apart from the crazy lisp syntax, you really have to get your grips around the idea of functional programming and recursion. For a while now I've definitely got more into the swing of using functional programming concepts in my Javascript code, but I haven't put the time or effort into learning any recursion. I've always known recursion is about a 'function calling itself', but actually knowing how to use it is another story. However with the time I spent pair programming with my lisp empowered friend, I can finally say I **get** recursion, or at least I'm a step closer!

Here is the problem I solved with recursion:

>Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

>Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.

>Here's, an example:

>`f(n=100) // returns 5050`
It's your duty to verify that n is a valid positive integer number. If not, please, return false.


You can try and solve this yourself first to see how your solution compares to mine.

Here's how I usually would solve this kind of problem. For clarity I've removed the defensive programming to highlight the differences. As you can see I go straight into using a loop (as I have no idea how to solve this entirely with Math based functions) and it's pretty straightforward. I have 1 variable that keeps track of the state and inside the loop I just update that on every iteration of the for loop until `n = 0`, and then you just return the `total`. Simple.

```js
//Imperative style
function f(n){
  var total = 0

  for(n; n > 0; n--){
    total += n
  }

  return total
}
```

Now for the recursive style:
```js
//Functional style
function f(n, total){
  if(n === 0){
    return total;
  }

  return f(n-1, n+total);
};
```

In the recursive style, there are two important points to pick up on. First our function needs two parameters (instead of one). The reason for this is, we no longer have the `total` variable outside the loop to keep track of our running total. You can think of this as the data the function is manipulating. The `n` we can think of as the state, which is keeping track of what numbers we have summed so far. So every time we make another recursive call, we reduce the state by 1, and add the number to the total (because the function is a sum). We can think of `n` as the `index` we usually have in a `for` loop. So in short, a recursive function needs to pass through the data through the function as there is no external variables to hold the data for you.

The second thing you need to remember is that a recursive function needs a **guard**. This is basically jargon for a conditional to stop your recursion at some point. This is similar to a while loop. Think of it as *keep the recursion going as long as this condition **isn't** true*

Finally, as we only have one guard function, it's fairly easy to simplify our recursive function with a ternary operator:

```js
function f(n, total){
  return n === 0 ? total : f(n-1, n+total);
};
```

Looks much better right?

That's it for this post. A fairly short post to try and make you get your head around recursive functions. I'm not sure if I'll use recursion much in the future, but it's definitely nice to have it as another tool in my toolbox.


