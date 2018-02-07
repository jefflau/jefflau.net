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
    <Header pages={data.pages.edges} />
    <main>
      {children()}
    </main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query navigation {
    pages:allMarkdownRemark(
      filter:{ frontmatter: { page:{eq:true} }}
      sort: { fields: [frontmatter___date], order:DESC}
    ){
      edges{
        node{
          id
          frontmatter{
            title
            slug
          }
        }
      }
    }
  }
`