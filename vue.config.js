module.exports = {
  publicPath: "./", // fixed build path being absolute
  devServer: {
    public: "localhost:8080" // kills cors issue and prevents network address being different.
  },
  transpileDependencies: [/node_modules(?:\/|\\)lit-element|lit-html/]
};
