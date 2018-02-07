import React from 'react'
import Helmet from 'react-helmet'

export default ({
  data
}) => {
  const { markdownRemark: post } = data;
  return <div>
    <h1>
      {post.frontmatter.title}
    </h1>
    
    <div dangerouslySetInnerHTML={{ __html: post.html}} />
  </div>
}

export const query = graphql`
  query BlogPageBySlug($path: String!) {
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