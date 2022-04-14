require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `CELC 2023`,
    description: `Canadian Engineering Leadership Conference 2023`,
    author: `CELC 2023 Organizing Committee`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-firebase`,
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MSG_SDR,
          appId: process.env.FIREBASE_APP_ID,
          measurementId: process.env.FIREBASE_MEASUREMENT,
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `celc2023-static/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/src/locales/`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        duration: 500
      }
    },
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CELC 2023 | Calgary AB`,
        short_name: `CELC 2023`,
        start_url: `/`,
        background_color: `#A8A8A8`,
        theme_color: `#19274B`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `fr`],
        defaultLanguage: `en`,
        siteUrl: process.env.SITE_URL,
      }
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Poppins: 300,400,600,700`]
        }
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
