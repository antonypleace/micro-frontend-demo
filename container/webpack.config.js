// Load environment variables from .env file if using dotenv
require('dotenv').config();

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;


module.exports = {
  mode : 'development',
  devServer : {
    port : process.env.PORT || 8680,  // Adjust for each micro frontend
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
              name : 'container',
              remotes : {
                app1 : 'app1@http://app1.demo.symbol8.com/remoteEntry.js',
                app2 : 'app2@http://app2.demo.symbol8.com/remoteEntry.js',
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
