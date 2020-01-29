/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';

const divStyle = {
  margin: '0 auto',
  maxWidth: '960',
  padding: '0 1.0875rem 1.45rem',
};

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={divStyle}>
        <main>{children}</main>
        <footer>
          © 2020, Built with
          <a href="https://www.gatsbyjs.org"> Gatsby</a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
