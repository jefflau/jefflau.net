---
title: Replacing Redux with GraphQL and the new React Context API
slug: /replacing-redux-with-graphql-and-the-new-react-context-api
date: 2018-04-14
---

Over the last 3 months or so I've been playing with GraphQL, a lot. I've built a fully functioning Q&A app, with users, comments, bookmarks, likes. And I've given up Redux. Ever since I started using Redux, I thought 'this is the state management solution to solve all state management solutions', I got swept up with hype. But in that hype I failed to realise that what Redux was solving was a problem in the API layer of modern web applications. GraphQL has allowed me to piece by piece get ween me off a technology that I held so dear, but ultimately resulted in much more boilerplate than was required for most things. This is a post about what I used Redux for and what I use now.

## What did I use Redux for?

Below I've listed the things that I used Redux for before, and how I deal with it now.

### Dealing with dependent asynchronous side effects

This often had me doing multiple GET requests to my REST API, that would slowly build up the data I needed to show a particular page.

What GraphQL has enabled us to do is to go from multiple requests to a single request that gathers all the data for you in one call. It lets the server do what it's good for - serving and filtering the data. Your client just asks for the data it needs and it receives it in one nice little data package. This reduces the amount of asynchronous calls you need to make, so if you are in charge of building your API, you often don't need to such a complicated state management system in your application.

If you have an existing REST API that you can't get rid of yet, you can create a intermediary GraphQL server layer that makes your REST calls and merges it with your GraphQL schema. This is highly useful if you are using public APIs that you have no control over.

```js
const answerSingleQuery = gql`
  query answerSingle($id: String!) {
    answerSingle(id: $id) {
      _id
      title
      content
      images
      userId
      createdAt
      user {
        _id
        firstName
        lastName
        avatar
      }
      comments {
        _id
        createdAt
        content
        userId
        user {
          _id
          firstName
          lastName
          avatar
        }
      }
      question {
        _id
        content
      }
      likes
      liked
      bookmarked
    }
  }
`;
```

Here's an example query from the Q&A application. It gets a single Answer from the database, but it also gets a bunch of meta data all in one call. The `user`. `comments`, `question`, `likes`, `liked` and `bookmarked` are all generated for me by the server with the power of resolvers, which act like little routers which would be doing the multiple HTTP requests for you in Redux. If you were using thunks, this would often end up in a bunch of asynchronous action creators that would keep calling each other when the data came back. To show the power of GraphQL, I can make the same call, to the same endpoint with a different and without changing the resolvers.

```js
const answerSingleQuery = gql`
  query answerSingle($id: String!) {
    answerSingle(id: $id) {
      _id
      title
      content
      images
      userId
      createdAt
    }
  }
`;
```

I can get less data if I need to, whicb means the backend does not need to create two endpoints for `answerWithLittleBitofData` and `answerWithMostOfTheDataMinusThatOneLittleThing`.

### Optimistic UI

With Apollo Client, a GraphQL client, I have optimistic UI out the box, so when I make updates to my server-side data, I can update the client cache so it's reflected in the UI before the server comes back. The client then does the same update again once the data has returned from the server to ensure the data is as it should be.

### Loading actions

I had a lot of actions just for dealing with fetching data for various different resources. Apollo Client deals that for me out of the box with a loading prop that you can trigger your loading UI. Here's a basic example using React and Apollo's `<Query>` component which uses the [render prop technique](https://reactjs.org/docs/render-props.html)

```js
const GET_RANDOM_QUESTION = gql`
  query randomQuestion {
    randomQuestion {
      _id
      content
    }
  }
`;

const Question = () => (
  <Query query={GET_RANDOM_QUESTION}>
    {({ loading, data }) => {
      if (loading || !data) return <div>Loading...</div>;
      return <IdeateButton randomQuestion={data.randomQuestion} />;
    }}}
  </Query>
);
```

### Client side state

Once you start using GraphQL you realise that 80% of the data you kept in your redux store is now inside your GraphQL client cache and is dealing with all the things you were dealing with manually better than you ever could. But what about the pure client side data? Form data? Modal opening?

Well you know that thing called React that renders your view? Apparently... it's pretty good at dealing with state too. `this.state` and `this.setState()` are all you need for local component and you don't need to bother with all the action/reducer boilerplate for such simple state changes. If you want to keep your components pure, you can use Higher Order Components(HOCs) to wrap your functional components with a state container with something like recompose. I wrote a post about it [here](http://jefflau.net/improving-your-react-workflow-with-recompose-and-hoc)

### A global store that I could connect() to any component

The last part of the question is a global store that you can connect anywhere down the tree. One of the most annoying thing in React is when you have a fairly large application, you end up doing something Kent C. Dodds coined [prop drilling](https://medium.com/dailyjs/reacts-%EF%B8%8F-new-context-api-70c9fe01596b) who also wrote a great post on context. React's most recent release 16.3 has a revamped [Context API](https://reactjs.org/docs/context.html), which works like a charm. Just like Redux, you connect your App via Provider at the Root. Then at any point in the tree you import your Consumer that allows your to 'consume' the data from your Context.

Below is a simple example of creating global state to trigger a modal. The `StateProvider` is a component we make to hold normal React state and we pass it to the children using the `<GlobalState.Provider>` which wraps the whole app just like the React Redux or React Router Providers which also use context under the surface. The Consumer component is a property of your context and anywhere down the tree you can wrap your components in Consumer which use the [`render prop`](https://reactjs.org/docs/render-props.html) pattern to pass the state to the children of the `<GlobalState.Consumer>`.

```js
import React from 'react'
const GlobalState = React.createContext()
export default GlobalState

export class StateProvider extends React.Component {
  state = {
    showModal: false
  }
  render() {
    return (
      <GlobalState.Provider
        value={{
          state: this.state,
          toggleModal: () => !this.state.showModal
        }}
      >
        {this.props.children}
      </GlobalState.Provider>
    )
  }
}


//some component super deep down the tree
import React from 'react'
import GlobalState from './GlobalState'
export default () =>
  <GlobalState.Consumer>
    {
      context =>
        <div onClick>Toggle the modal ${context.state.showModal ? 'off': 'on'}!</div>
    }
  </GlobalState.Consumer>
```

## Closing thoughts

I haven't covered everything that Redux can do, and for sure it's the most powerful and flexible state management system I've used so far. There are so many plugins and middleware for Redux that do more than Apollo client and React state can do for you, but for the vast majority of normal CRUD applications, Redux is overkill and it's more overhead than it's worth. One thing I will miss from Redux is the dev tools. Since all state transitions are dealt with via actions, you can replay your actions to 'time travel' or even easily log each action as it happens. Which you can't really do without Redux. However you have to deal with much less state since you're using GraphQL. For a large application it might be worth the overhead, but for most smaller applications and CRUD-based applications, I don't think I'll miss it.

One thing I haven't tried yet that I'd very much like to, is `apollo-link-state`, which allows you to do client only graphQL calls, and can act like the global state container for your application. This would allow you to use the same interface for your server-side and client-side data needs, and you can call for the data in the same query! It's early days, but it's one of the reasons why I put everything into Redux before, it's powerful to have one pattern to handle all your data and state instead of context switching between different solutions.
