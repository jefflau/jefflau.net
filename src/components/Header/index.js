import React from 'react'
import Link from 'gatsby-link'

const Header = () => ( //{ pages }
  <header className="site-header">
      <h1 className="logo">
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Jeff Lau
        </Link>
      </h1>
      <ul>
        {/* {pages.map(({node: page}) => 
          <li key={page.id}><Link to={page.frontmatter.slug}>{page.frontmatter.title}</Link></li>
        )} */}
        <li key="mentorship"><Link to="/mentorship">Mentorship</Link></li>
      </ul>
  </header>
)

export default Header