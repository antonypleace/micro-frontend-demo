const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;
const path = require('path');

module.exports = {
  mode : 'development',
  devServer : {
    port : 8682,  // Adjust for each micro frontend
    open : true,
    hot : true,
  },
  entry : './src/index.js',
  module : {
    rules :
          [
            {
              test : /\.js$/,
              exclude : /node_modules/,
              use : {
                loader : 'babel-loader',
                options : {
                  presets : ['@babel/preset-env', '@babel/preset-react'],
                },
              },
            },
          ],
  },
  plugins :
          [
            new ModuleFederationPlugin({
              name : 'app2',  // Adjust for each micro frontend
              filename : 'remoteEntry.js',
              exposes : {
                './App2' : './src/App2',
              },
              shared : {
                react : {
                  singleton : true,
                  requiredVersion : '^17.0.2',
                  eager : false,
                },
                'react-dom' : {
                  singleton : true,
                  requiredVersion : '^17.0.2',
                  eager : false,
                },
              },
            }),
            new HtmlWebpackPlugin({
              template : './public/index.html',
            }),
          ],
  output : {
    path : path.resolve(__dirname, 'dist'),
    filename : '[name].js',
  },
};
