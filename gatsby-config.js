module.exports = {
  siteMetadata: {
    title: `Olivier Ramier | Freelance Software Engineer`,
    description: `
    Personal website of Olivier Ramier. I'm a freelance french software engineer living in Berlin, passionate about the web, technology and learning. I provide full-stack software development in TypeScript, React.js, Node.js, GraphQl`,
    author: `@olivier_ramier`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/OR.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `olivierramier.xyz`,
        customDomain: `analytics.sci-map.org/js/plausible.js?original=`,
      },
    },
  ],
};
