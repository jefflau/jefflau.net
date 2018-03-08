---
title: Setting up a graphql API with Meteor and Apollo
slug: /setting-up-a-graphql-api-with-meteor-and-apollo
date: 2018-03-02
draft: true
---

I've been using Meteor for years, and even though it is showing its age in some respects, it is still the quickest and easiest way to get a backend and database running with minimal setup. In this article I will explain how I got Meteor setup with GraphQL to serve your front-end.

As of this article I'm using 1.6.1 as of this article and I've assumed you've installed it. Then run:

```bash
$ meteor add swydo:ddp-apollo
```

This package runs your graphql queries over your DDP connection with Meteor. If you want to not use ddp, you can also use the [official meteor apollo package](https://docs.meteor.com/packages/apollo.html) which uses `apollo-server-express` which exposes an HTTP server instead of using Meteor's built-in DDP connection (powered with websockets). If you have multiple clients unrelated to Meteor, it might be worthwhile you checking out those packages. The setup is almost the same so this article should also be relevant.

The first thing you need to understand for GraphQL is your schema. Your schema defines the interface to your data, so you need to define what your data looks like. Your schema has three main kinds of types.

The majority of your types will be a normal object `type`. It takes a name and then a structure for your data, which looks a lot like JSON. Each property inside will either have another `type` or it will have a primitive datatype such as a `String` or `Int`.

A `Query` type describes a read on the data, and you will couple them with your other types to create an entry point into your graphQL API. This can be thought of as GET request from a REST standpoint

A `Mutation` type describes a write to your data, and allows you to update or create new entries to your data. You can think of it as a POST in terms of REST

```graphql
# Basic types
type Author {
  id: Int
  name: String
  posts: [Post] # An array of type Post
}

type Post {
  id: Int
  title: String
  text: String
  author: Author # returns a type Author
}
```

In this type example the `Author` type has an id and name with primitive types, but then we have the property `posts` which is an array of type `Post`. In this way we can create relationships between our types. With the Post type we also get the Author, so they are linked intrinsically within our schema.

```graphql
# Query type
type Query {
  singleAuthor(id: ID): Author
  authors(): [Author]
}
```

Here we define a Query type with two 'entries' to our GraphQL API. We can get a single Author with just an Id, or we can get an array of authors using the `authors()` query. Queries can take parameters, just like a function so you can create more complex queries using arguments. The colons denote what the function returns. So the `singleAuthor()` query returns an `Author` type and the `authors()` query returns an array of `Author` types.

```graphql
# mutation
type Mutation {
  newAuthor(id: ID): Author
  authors(): [Author]
}
```

Mutations are very similar to Query types. They describes the parameters they take and their type as well as their return value

## Resolve Functions - little routers

Could be from any database on another API. This hides backend complexity

graphql handles multiple queries together
