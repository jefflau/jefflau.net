---
title: Digging into GraphQL from the front-end
slug: /digging-into-graphql-from-the-front-end
date: 2018-02-23
---

I've been exploring GraphQL for the last few weeks first through building my blog using Gatsby and now through Apollo. Both great frameworks for what they do and they both use GraphQL as their API layer

The first thing you realise when you start to use graphQL from the frontend is that you don't have to manipulate your data as much. This query below looks remarkably like the JSON you get as a response, just without the values. If you don't want the email, or you want to add another field, you just add another 'property' to your query.

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

```graphql
{
  getAuthor(id: 5) {
    name
    posts {
      title
      author {
        name # this will be the same as the name above
      }
    }
  }
}
```

Here we get the author with the id of 5, but we also get all his posts. You can probably imagine how to make this call to a REST API `/author/5`, but then you probably have to make another call to `/posts/author/5` to get all the posts for that author. The posts could be attached to the getAuthor call, but say you had a 'featured author' on the sidebar, maybe you wouldn't want all of the author's posts? GraphQL allows you to choose how heavy your calls are and ask for specific data in each request. This is important is today's landscape where the web is predominantly from mobile devices. You can think of GraphQL as a query language that REST has needed for a long time. No more over or underfetching data.

The query language is declarative which means it is defining what we want, not how we get it. With traditional REST architecture we are requesting from a specific address, however with graphQL there is often just one endpoint where you make all your requests. This creates a separation between the client and the various data sources you might be pulling from.

I used to think that graphQL is only for super complicated applications that only Facebook might need, but after using it with Gatsby, I've realised how awesome it really is. With such declarative syntax on the frontend, I already know what the data is going to look like, even if the backend hasn't been built yet. And possibly the most useful tool is GraphiQL, which allows you to run queries in isolation.

If you want to an easier learning experience, I highly recommend trying [Gatsby](https://www.gatsbyjs.org/) out as you can play with graphQL queries just using markdown files without an actual backend.
