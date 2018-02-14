import React from 'react'
import Link from 'gatsby-link'

const IndexPage = (props) => {
  console.log('INDEX PAGE', props)
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
      filter:{
        frontmatter: { 
          page: {ne:true}, 
          draft:{ne:true} 
        }
      }
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
