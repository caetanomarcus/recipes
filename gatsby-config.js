module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "recipes",
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-react-helmet",
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "mydata",
      fieldName: "mydata",
      url: "https://api-us-east-1.graphcms.com/v2/ckv3ruoje31pj01yz1tdfem4l/master",
    },
  }
],
};
