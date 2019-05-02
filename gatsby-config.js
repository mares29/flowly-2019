module.exports = {
  siteMetadata: {
    title: `Flowly.cz - Tým zkušených & kreativních lidí pro váš web`,
    description: `Jsme tým nezávislých profesionálů pro váš web a online marketing! Vybíráme si projekty, pro které se můžeme nadchnout a posouvají nás dál v tom, co děláme.`,
    author: `flowly.cz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "@fika/gatsby-source-cockpit",
      options: {
        token: "13e1804e54e36cb6c5712ce787dc26",
        baseUrl: "http://admin.flowly.cz", // (1)
        locales: [], // (2)
        collections: ["member", "client", "project"], // (3)
      },
    },
  ],
}
