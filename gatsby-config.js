module.exports = {
  pathPrefix: "/homepage", // ..github.io/homepage/ is the base URL of the site
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `sumpulse-sounds`,
    //     short_name: `sumpulse`,
    //     start_url: `/`,
    //     // background_color: `#663399`,
    //     // theme_color: `#663399`,
    //     // display: `minimal-ui`,
    //     // icon: `src/images/logo.png`, // This path is relative to the root of the site.
    //   },
    // },
  ],
};
