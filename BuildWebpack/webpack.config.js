const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env) => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ];

  if (env === 'prod') {
    plugins.push(new UglifyJSWebpackPlugin());
  }

  return {
    entry: './src/js/index',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.[hash].js',
    },
    devtool: (env === 'prod') ? false : 'source-map',
    plugins,
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: "babel-loader",
          options: {
            presets: [
              ['env', {
                targets: {
                  browsers: ["last 2 versions", "safari >= 7"]
                },
                modules: false
              }]
            ]
          }
        }
      }]
    }
  };
};
