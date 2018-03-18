---
title: Improving your React workflow with recompose and Higher Order Components
slug: /improving-your-react-workflow-with-recompose-and-hoc
date: 2018-03-18
---

Its common place these days to write your react components pure components with them only taking props and having container components that pass props down to your 'dumb' components. You can take this pattern to the next level with higher order components. Higher order components are components that take a component as an argument and return a new enhanced component. If you've ever used redux with react, you've used a HOC. These components usually are a function that take some options, which then returns another function that will take your original component and then return an enhanced component

```
import { connect } from 'react-redux'

const EnhancedComponent = connect(...args)(ComponentToWrap) // returns new enhanced component
```

## What can recompose do?

So now we know HOCs are common place in our everyday React workflow, but what does recompose do? [Recompose](https://github.com/acdlite/recompose) gives us a toolbox of HOCs that allow us to enhance our React components without writing them ourselves.

Here's a simple example:

```js
import { withState } from 'recompose';
const enhanceWithState = withState('counter', 'setCounter', 0)(Component);
```

Here we can enhance our Componet with the `withState` HOC, the function takes 3 arguments. The state variable name, which is passed through to your component as a prop, the setState handler and an initial state. Within your wrapped component you can now access it as follows:

```js
import React, { Fragment } from 'react';

const Component = ({ counter, setCounter }) => (
  <Fragment>
    {' '}
    // React 16 fragments woo
    <div>{counter}</div>
    <button onClick={() => setCounter(i => i + 1)}>increment</button>
    <button onClick={() => setCounter(i => i - 1)}>decrement</button>
  </Fragment>
);
```

HOC are composable, so we could abstract these onClick handlers to another HOC we can get from recompose called `withHandlers`. Recompose also supplies us with a helper function called compose, which takes all our HOCs and runs them one by one gradually building out wrapped Component

```js
const Component = ({ counter, increment, decrement }) => (
  <Fragment>
    <div>{counter}</div>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
  </Fragment>
);

const addCounting = compose(
  withState('counter', 'setCounter', 0),
  withHandlers({
    increment: ({ setCounter }) => () => setCounter(n => n + 1),
    decrement: ({ setCounter }) => () => setCounter(n => n - 1)
  })
);

const Counter = addCounting(Component);
```

Here we can see we have abstracted the handlers away from the original component and all the logic is now being handled by our HOC `withHandlers` that pass a prop to update the state that is held within the `withState` HOC. Together they can 'compose' very complicated components but keep your original component pure without any side effects, making it easier to test and reason about.

This pattern above is so widely used that Recompose has a helper to do it both in one called [`withStateHandlers`](https://github.com/acdlite/recompose/blob/master/docs/API.md#withstatehandlers). However the above example illustrates how HOCs can make use of the props that are exposed by each other. This means that the order of your HOCs within the compose helper is important. The `withState` HOC needs to be first as the `withHandlers` uses the `setCounter` function as a prop to create the handler.

Using recompose has been a breath of fresh air helping to simplify my React development and keeping my components structured and focussed. Recompose can also be used with popular libraries such as Redux or Apollo that use HOCs already to enhance React components.

Here's the code on a codesandbox for you to play with!

[https://codesandbox.io/s/znrzvk078x](https://codesandbox.io/s/znrzvk078x)
