---
title: Building a Gatsby Blog
slug: /building-a-gatsby-blog
date: 2018-02-09
---

I spent a few days last week rebuilding my blog with Gatsby. My last blog was built on Ghost, but the upgrade process was such a pain that I never bothered upgrading, and after a few years on their platform it just seemed more simple to manage a single repo instead of having to deal with deployment. Gatsby is a React-based static site generator. It uses some nice things like the latest Javascript, GraphQL and allows to easily add some plugins that add functionality like compressing and generating image sizes easy without the developing having to do too much. In this tutorial I assume some Javascript and React knowledge as well as basic command line knowledge

## Migrating from other blogs

The first thing I had to do was migrate my posts over from my other blogs. This step is not painless, but ultimately you only have to do it once and then you can control your data however you want.

### From Wordpress

For Wordpress you can use their built in exporter to get an XML dump and then if you are on unix you should be able to clone this repo and run it with node. It takes your xml (hardcoded to export.xml) in the same folder and then outputs a folder of markdown files and downloads the images for you.

[https://github.com/jefflau/wordpress-to-markdown](https://github.com/jefflau/wordpress-to-markdown)

### From Ghost

Ghost allows you to export you files as a JSON dump, which you can then convert with something like this: https://github.com/hswolff/ghost-to-md. I could not find a tool to download all the images so I did this manually, but I'm sure you could write a tool to do this too, but I didn't have that many images. I also manually added a '/' to all the slugs which seems to be required in Gatsby.

##Setting up

Installing Gatsby is a breeze, you just need to add the `gatsby-cli` with `npm install -g gatsby-cli`. Once you do that you're going to want to create a new app with:

```bash
$ gatsby new projectName
```

This will create a basic skeleton for you to start creating your app.

We will add a bunch of dependencies which I will explain later:

```bash
$ npm install --save gatsby-plugin-sharp gatsby-remark-copy-linked-files gatsby-remark-images gatsby-transformer-remark gatsby-transformer-sharp sharp
```

##Setting up your Markdown files

For me I keep my posts in `/src/posts` and in there Gatsby expects a folder for each post. The name of these are unimportant for the sake of Gatsby, but for your sanity I recommend dating them and adding the title so you can find a post for editing later. Inside the folder you an also name your `.md` what you like. We'll also keep our images in the same folder as our post and use some Gatsby magic to link them together.

Now that we have our posts in the correct place we can add some code in `/gatsby-config.js` which should have been created when we ran `gatsby new`. Here we need to place some code that tells Gatsby to look for our posts and allows other things to access them.

```js
// gatsby-config.js
plugins: [
  //... other plugins
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/src/posts`,
      name: 'posts'
    }
  },
]
```

Now that we've done that we need to tell Gatsby to take those markdown files and make a page for each in `/gatsby-node.js` which is another file that gets added on our scaffold step:

```js
// gatsby-node.js
const path = require('path')
exports.createPages = ({ boundActionCreators, graphql}) => {
  const { createPage } = boundActionCreators

  const postTemplate = path.resolve('src/templates/post.js')

  const posts = graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }`)
  .then(res => {
    if(res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: postTemplate,
      })
    })
  })
}
```

This uses one of Gatsby's node's API that run to create our static pages for each markdown file. If you don't know anything about GraphQL don't worry about that, but what we're doing is querying our markdown files using GraphQL, which returns a promise. From that we can take that data and then call the `createPage` action creator (Gatsby uses redux in the background).

Finally we need to create the actual post template which we used in `gatsby-node.js`. Create a `post.js` in `/src/templates` and add this code:

```js
import React from 'react'
import Helmet from 'react-helmet'

export default ({data}) => {
  const { markdownRemark: post } = data;
  return <div>
    <div className="date">{post.frontmatter.date}</div>
    <h1>
      {post.frontmatter.title}
    </h1>
    
    <div dangerouslySetInnerHTML={{ __html: post.html}} />
  </div>
}

export const query = graphql`
  query BlogPostBySlug($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        slug
        title
        date(formatString: "Do MMMM , YYYY")
      }
    }
  } 
`
```

If you're familiar with react this will look pretty similar to a normal react component. The only difference is the graphql query at the end. The `graphql` function gets injected by gatsby so we don't need to import it ourselves. This export will attach this query to the props of our component. As you can see we are destructuring the `data` property out of this React component's `props`. The `data` is the prop that Gatsby uses to attach your markdown information to your template. This is a pretty basic template that just outputs the html and adds the `date` and `title` from the `frontmatter` of your markdown post. The `frontmatter` is the terminology used by Gatsby that represents all the meta information of your posts kept at the top between the `---` triple hyphens.

From this we can already query each of our posts by going to localhost:8000/blog-post-slug.

##Creating the blog post listing page

Now that we have all the markdown files being made into static html files and a template to show them, we need to create a listing page to show all our blog posts. We could make this any page such as `/blog`, but I am just going to show it on the index of the blog just for simplicity. Paste this code into your `index.js` file over your current index file in your `/src/pages` folder. 

```js
// index.js
import React from 'react'
import Link from 'gatsby-link'

const IndexPage = (props) => {
  const { data: { allPosts: { edges: posts} } } = props
  return <section className="posts-container">
    {posts.map(({ node }) => 
      <li key={node.id} className="posts-item">
        <Link to={node.frontmatter.slug}>
          <span className="posts-title">{node.frontmatter.title}</span>
          <span className="posts-date">{node.frontmatter.date}</span>
        </Link>
      </li>)}  
  </section>
}
export default IndexPage

export const query = graphql`
  query allPosts{
    allPosts:allMarkdownRemark(
      limit: 1000, 
      sort: { fields: [frontmatter___date], order:DESC}
    ){
      edges{
        node{
          id
          frontmatter{
            title
            slug
            date(formatString: "D MMM YYYY")
          }
        }
      }
    }
  }
`

```

This is similar to the `post.js` template. It is a React component with a GraphQL query. Because it lives inside the `/pages` folder, Gatsby will automatically make it a route on your blog. Since it's the index, it will just be the root route of your application. The query is about as simple as it gets. We are querying the `allMarkdownRemark` which allows us to query all the markdown from our `posts` folder. We are renaming it with an alias `allPosts` that makes more sense to our query, this will be the variable that is made available to your on your `data` prop. And then we are giving the query some parameters, related to how many blog posts we want (limited to 1000) and we want it sorted by date. GraphQL is out of scope of this blogpost, but there are many other ways to sort and filter your data with this powerful query language.

Lastly we are making sure we have the title, slug and date from each post and we are formatting the date in a certain way that Gatsby's version of GraphQL allows us to do.

Once we've done that we should have a live blog! I deployed my blog using surge which is pretty much a oneliner by just running:

```bash
$ npm install -g surge
$ gatsby build
$ cd public
$ surge . --domain somedomain.surge.sh
```

I keep this as an npm script in package.json:


```json
"scripts": {
    "build": "gatsby build",
    //...other scripts
    "deploy": "gatsby build && cd public && surge . --domain jefflau.net",
}
```

And there you have it, you should have a fully functioning, but basic blog running with Gatsby! There is much more you can do with Gatsby such as adding tags and categories, dynamic navigation of your pages, pretty much anything you can do with your Wordpress blog, and it's super easy to deploy!