import React from 'react'
import Helmet from 'react-helmet'

export default ({data}) => {
  console.log(data)
  const { markdownRemark: post } = data;
  //const { pathContext: post} = data
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