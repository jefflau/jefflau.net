---
title: Setting up a GraphQL server with Meteor and Apollo
slug: /setting-up-a-graphql-server-with-meteor-and-apollo
date: 2018-03-16
draft: true
---

I've been using Meteor for years, and even though it is showing its age in some respects, it is still the quickest and easiest way to get a backend and database running with minimal setup. In this article I will explain how I got Meteor setup with GraphQL to serve your front-end.

As of this article I'm using 1.6.1 as of this article and I've assumed you've installed it. Then run:

```bash
$ meteor add swydo:ddp-apollo
```

This package runs your graphql queries over your DDP connection with Meteor. If you want to not use ddp, you can also use the [official meteor apollo package](https://docs.meteor.com/packages/apollo.html) which uses `apollo-server-express` which exposes an HTTP server instead of using Meteor's built-in DDP connection (powered with websockets). If you have multiple clients unrelated to Meteor, it might be worthwhile you checking out those packages. The setup is almost the same so this article should also be relevant.
