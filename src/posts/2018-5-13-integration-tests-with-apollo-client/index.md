---
title: Integration Tests with Apollo Client Mock
slug: /integration-tests-with-apollo-client-mock
date: 2018-05-13
---

If you want to unit test your components that contain the `<Mutation>` or `<Query>` render prop components from `react-apollo`, it's a little difficult as they would have to be passed as props to your component or wrap your component like this:

```js
const UIComponent = ({ data, loading }) => {
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      {
        // use data
      }
    </div>
  );
};

const ContainerComponent = () => (
  <Query query={GET_DATA}>
    {({ data, loading }) => <UIComponent data={data} loading={loading} />}
  </Query>
);

export default ContainerComponent;
```

This would work well for very small components, but often you might want to add a Mutation or Query half way down the tree and to mock this out using props, you'd have to bring it all the way up to the top of your component tree.

When you are testing larger components, you are going to want to do integration tests instead. The harder thing with integration tests is you now need to mock out the `<ApolloProvider>` at the top of your component tree. This will take your instance of the `apollo-client` package, and by default this will also call all your resolvers. So now our problem is that we need to mock out the queries and mutations to our server.

Enter [`apollo-client-mock`](https://www.npmjs.com/package/apollo-client-mock). This is a package I created using `apollo-link-schema`, which allows you to setup a mock schema and resolvers. This means for your tests you can return whatever data you like without it actually going to the server. The setup is fairly simple, you just setup your mock resolvers as if you were setting up your real resolvers, and then pass the resolvers and typeDefs to the `setupClient` function exposed by `apollo-mock-client` and it will then give you back a function which will create a mock client each time you call it.

```js
import typeDefs from '../link/to/schema';
import setupClient from 'apollo-mock-client';

const defaultMocks = {
  Query: () => ({
    //...mock queries
  }),
  Mutation: () => ({
    //...mock mutations
  })
};

const createClient = setupClient(defaultMocks, typeDefs);

export default createClient;
```

From here we can start testing with it. I'm using `jest` and `react-testing-library`, a nice alternative to Enzyme. All we need to do is to import the `<ApolloProvider>` from `react-apollo` which we pass the client we create with `createClient()`. Then wrap the component we want to test in that Provider.

```js
import React from 'react'
import { render } from 'react-testing-library'

import { ApolloProvider } from 'react-apollo'
import createClient from '../testing-utils/mockedClient'

import MyComponent from '../MyComponent'

test('should call resolver without blowing up', () =>
  const mockClient = createClient()
  const { getByText, container } = render(
    <ApolloProvider client={mockClient}>
      <MyComponent />
    </ApolloProvider>
  )

  //the rest of your test
}
```

Now we can run our integration tests without refactoring our components to suit our tests. I've found doing Unit tests with components sometimes difficult as if you have any side effects it becomes more and more difficult to abstract them away so your unit test can run. Instead I think a better practice is to mock the data coming in and that's easy with `apollo-client` and `apollo-client-mock`!

Since I'm only mocking the client, I assume this should work with other view frameworks such as Vue or Angular, but I haven't tried but if you, you can send me a PR for [`apollo-client-mock`](https://www.npmjs.com/package/apollo-client-mock) so I can add instructions for setup in the readme
