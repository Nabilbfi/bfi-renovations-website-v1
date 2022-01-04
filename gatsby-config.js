module.exports = {
  siteMetadata: {
    title: "Ottawa Home Renovation Contractor",
    titleTemplate: "%s - BFI Renovations",
    description:
      "BFI Renovations is a top-rated Ottawa Home Renovation contractor servicing Ottawa, ON and surrounding areas. Call 613-620-4340 to get a free quote today!",
    url: "https://www.bfirenovations.ca", // No trailing slash allowed!
    siteUrl: "https://www.bfirenovations.ca",
    image: "/images/logo.svg", // Path to your image you placed in the 'static' folder
    twitterUsername: "",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    // sitemap
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        exclude: [`/privacy-policy/`, `/terms-of-use/`],
      },
    },
    // GA
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-202884252-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
      },
    },
  ],
}
