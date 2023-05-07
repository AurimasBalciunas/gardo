const path = require('path');
const webpack = require('webpack');
const { IgnorePlugin } = require('webpack');

module.exports = {
  entry: './src/index.js', // Replace with your entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({ Buffer: ['buffer', 'Buffer'] }),
    new webpack.ProvidePlugin({ process: 'process' }),
    new webpack.ProvidePlugin({ url: 'url' }),
    new IgnorePlugin({ resourceRegExp: /^(fs|path)$/ }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    fallback: {
       buffer: require.resolve('buffer/'),
       url: require.resolve('url/'),
       process: require.resolve('process/'),
       path: require.resolve('path-browserify'),
       fs: require.resolve('fs-extra'),
    },
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8080,
  },
};