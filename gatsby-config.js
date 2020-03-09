module.exports = {
  siteMetadata: {
    title: "Desenvolvedor Pedro Ribeiro",
    description: "O melhor blog de programação do mundo"
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`
      }
    }
  ]
};
