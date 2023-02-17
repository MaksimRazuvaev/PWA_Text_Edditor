const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    // MR Add and configure workbox plugins for a service worker and manifest file.
    plugins: [
      // Webpack plugin that generates our html file and injects our bundles.
      // bundle is a single file that contains multiple JavaScript files, CSS files, or other assets required by a web application.
      // Plugin for generating an HTML file and a PWA manifest file
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Text Edditor'
      }),
     
      // Injects our custom service worker
      // plugin with the source and destination of the service worker file
      // for generating a service worker with precached assets and runtime caching strategies
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),

      // Creates a manifest.json file.
      // Plugin for generating an HTML file and a PWA manifest file.
      // app name, short name, description, colors, and icons
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Text Edditor',
        short_name: 'TextEd',
        description: 'This is my Progressive TextEd App!',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        start_url: './',
        publicPath: './',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ]
      }),
    ],

    // MR Add CSS loaders and babel to webpack.
    // Babel is a JavaScript compiler that can be used to convert modern JavaScript code into a backwards-compatible 
    // version of JavaScript that can run in older browsers.
    module: {
      // CSS loaders
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          // regular expression that matches all JavaScript files with the extensions .mjs and .js
          test: /\.m?js$/,
          exclude: /node_modules/,
          // We use babel-loader in order to use ES6.
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    },
  };
};
