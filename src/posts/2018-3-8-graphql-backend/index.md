---
title: The basics of GraphQL schemas
slug: /the-basics-of-graphql-schemas
date: 2018-03-08
---

The first thing you need to understand for creating a GraphQL API is your schema. Your schema defines the interface to your data, so you need to define what your data looks like. Your schema has three main kinds of types.

The majority of your types will be a normal object `type`. It takes a name and then a structure for your data, which looks a lot like JSON. Each field inside will either have another object `type`, an Array `[]` or it will have a scalar type such as a `String`, `Int`, `Boolean`. Alternatively you can also define your own scalar types such as a Date type.

A `Query` type describes a read on the data, and you will couple them with your other types to create an entry point into your graphQL API. This can be thought of as GET request from a REST standpoint

A `Mutation` type describes a write to your data, and allows you to update or create new entries to your data. You can think of it as a POST in terms of REST

```graphql
# Basic types
type Author {
  id: Int!
  name: String
  posts: [Post] # An array of type Post
}

type Post {
  id: Int!
  title: String
  text: String
  author: Author # returns a type Author
}
```

In this type example the `Author` type has an id and name with scalar types, but then we have the field `posts` which is an array of type `Post`. In this way we can create relationships between our types. With the Post type we also get the Author, so they are linked intrinsically within our schema. You can also add an exclamation mark `!` to denote a non-nullable value. This means the graphQL server promises to give you back a value and not null. In this case our id field will not return null and if it does, GraphQL will throw an error.

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

Mutations are very similar to Query types. They describe the arguments they take, their type and a return type you can expect from the mutation.

In addition to the `type` keyword, your schema can also have `enum`, `input`, `interface` and `union` types.

We'll start with `enum`. Enumerations are a scalar type that are limited to a certain set of values. For instance this example below could represent all the drinks in my coffee shop:

```graphql
enum {
  COFFEE
  TEA
  CHOCOLATE
}
```

`interface` and `unions` both allow you to define some abstract types that you can add to your object types. Any of the fields that are defined on the interface must be included in the object `type` to be valid.

```graphql
interface User {
  _id: Int
}

type Author implements User { # valid
  _id: Int
  postsCount: Int
}

type Reader implements User {
  _id: Int
  postsRead: Int
}
```

Union types are similar to interfaces, but they cannot supply fields that are in common. They are good for returning multiple different types from a query

```graphql
union Users = Author || Reader

type Query {
  searchUsers(username: String!) : [Users]
}
```

The last type you will encounter is the `input` type. It is exactly the same as an object type, but defined input to your queries so you can add an entire object as an argument

```graphql
input post {
  title: String!,
  content: String!
}

type Mutation {
  createPost(post): Post
}
```

Once you've learnt the schema syntax, the last thing you need to learn is resolvers, which you can think of as little routers that serve data up to your client.
