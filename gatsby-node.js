/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ boundActionCreators, graphql}) => {
  const { createPage } = boundActionCreators

  const postTemplate = path.resolve('src/templates/post.js')
  const pageTemplate = path.resolve('src/templates/page.js')

  const promise1 = graphql(`{
    allMarkdownRemark #(filter:{ frontmatter: { page: {ne:true} }}) 
    {
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

    res.data.allMarkdownRemark.edges.forEach(({ node}) => {
      createPage({
        path: node.frontmatter.slug,
        component: postTemplate,
      })
    })
  })

  // const promise2 = graphql(`{
  //   allMarkdownRemark(
  //     filter:{ frontmatter: { page: {eq:true} }}
  //   ) {
  //     edges {
  //       node {
  //         html
  //         id
  //         frontmatter {
  //           title
  //           slug
  //         }
  //       }
  //     }
  //   }
  // }`)
  // .then(res => {
  //   if(res.errors) {
  //     return Promise.reject(res.errors)
  //   }

  //   res.data.allMarkdownRemark.edges.forEach(({ node}) => {
  //     createPage({
  //       path: node.frontmatter.slug,
  //       component: pageTemplate,
  //       context: node
  //     })
  //   })
  // })

  return promise1
}