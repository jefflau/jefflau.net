import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
require("prismjs/themes/prism-tomorrow.css");
import '../stylus/index.styl'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header /* pages={data.pages.edges} *//>
    <main>
      {React.cloneElement(children(), { data })}
    </main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

// export const query = graphql`
//   query allPosts2{
//     allPosts:allMarkdownRemark(
//       limit: 1000, 
//       #filter:{ frontmatter: { page: {ne:true} }}
//       sort: { fields: [frontmatter___date], order:DESC}
//     ){
//       edges{
//         node{
//           id
//           frontmatter{
//             title
//             slug
//             date(formatString: "D MMM YYYY")
//           }
//         }
//       }
//     }
//   }
// `

// export const query = graphql`
//   query navigation {
//     pages:allMarkdownRemark(
//       #filter:{ frontmatter: { page:{eq:true} }}
//       sort: { fields: [frontmatter___date], order:DESC}
//     ){
//       edges{
//         node{
//           id
//           frontmatter{
//             title
//             slug
//           }
//         }
//       }
//     }
//   }
// `