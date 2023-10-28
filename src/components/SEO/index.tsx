import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const fontAwesome = [
    {
      rel: `preconnect`,
      href: `https://fonts.googleapis.com`,
    },
    {
      rel: "preconnect",
      href: `"https://fonts.gstatic.com`,
    },
    {
      rel: `stylesheet`,
      href: `"https://fonts.googleapis.com/css2?family=Poppins:wght@100;600&display=swap`,
    }
  ]

  return (
    <Helmet
      title={site.siteMetadata.title}
      meta={[
        {
          name: `description`,
          content: site.siteMetadata.description,
        },
      ]}
      link={[
        ...fontAwesome,
        ]}
    />
  )
}

export default SEO
