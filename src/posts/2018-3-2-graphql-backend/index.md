---
title: Digging into GraphQL from the back-end
slug: /digging-into-graphql-from-the-backend
date: 2018-03-02
draft: true
---

I've been exploring GraphQL for the last few weeks. As someone that has mainly been a front-end developer for the last 8 years, I don't have a lot of experience with building my own REST framework.

<!-- One of the things I have found myself doing less of since starting to use GraphQL is having to sift through a bunch of data I don't need. Since the REST endpoints almost have 0 idea what you want, you often get a lot of unnecessary data with it. However with GraphQL the query language is built so you can ask for specifically what you want. You can think of it as REST with more control as you can specific the kind of data you want back. -->

The one thing you realise when you start to use graphql from the frontend is that you don't have to manipulate your data as much. This query maps to the JSON response below.

```graphql
{
  subscribers(publication: "apollo-stack") {
    name
    email
  }
}
```

```js
{
  subscribers: [
    { name: "Jane Doe", email: "jane@doe.com" },
    { name: "John Doe", email: "john@doe.com" },
    ...
  ]
}
```

The backend does most of the work for you to arrange the data in the way that you want so you don't have to. In traditional REST architecture, you might have to make several separate calls to get the data you require. Take this example:

Schema - typed interface

```graphql
type Author {
  id: Int
  name: String
  posts: [Post]
}

type Post {
  id: Int
  title: String
  text: String
  author: Author
}

type Query {
  getAuthor(id: Int): Author
  getPostsByTitle(titleContains: String): [Post]
}

schema {
  query: Query
}
```

## Resolve Functions - little routers

Could be from any database on another API. This hides backend complexity

graphql handles multiple queries together
