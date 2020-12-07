var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.js$/, loader: "babel-loader", exclude: "/node_modules/" },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
        query: {
          sourceType: "unambiguous",
          presets: [
            "@babel/react",
            "@babel/preset-env",
            {
              plugins: [
                "@babel/plugin-proposal-class-properties",
                "@babel/transform-runtime",
                ["import", { libraryName: "antd", style: "css" }],
              ],
            },
          ],
        },
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: { lessOptions: { javascriptEnabled: true } },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: "http://localhost:4000",
    }),
  },
};
