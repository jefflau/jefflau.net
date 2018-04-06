---
title: Graphql on the frontend with web3
slug: /graphql-on-the-frontend-with-web3
date: 2018-03-02
draft: true
---

## The Concept implemented

My last blog post was about the idea that GraphQL could be used more in the front-end. Since then I've made a proof of concept of using GraphQL with web3

## Using [Apollo Link Schema](https://www.apollographql.com/docs/link/links/schema.html)

All you need to do is use the library as is and you don't need to

```js
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';

import schema from './path/to/your/schema';

const graphqlClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new SchemaLink({ schema })
});
```

If you need to use another way to get data, such as a GraphQL endpoint, you can use schema stitching!
