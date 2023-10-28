import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Portfolio Gatsby`,
    siteUrl: `https://portfolio.meet-app.link`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-gtag", "gatsby-plugin-sitemap", "gatsby-plugin-react-helmet", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/",
      "trackingIds": [
        process.env.GATSBY_TRACKING_ID
      ],
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
    __key: "pages"
  }]
};

export default config;
