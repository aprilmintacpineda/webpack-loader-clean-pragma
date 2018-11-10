/** @format */

const path = require('path');

const webpackLoaderCleanPragma = path.join(__dirname, 'index.js');

module.exports = {
  name: 'webpack-loader-clean-pragma',
  entry: path.join(__dirname, 'demo/entry.js'),
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          'babel-loader',
          {
            loader: webpackLoaderCleanPragma,
            options: {
              pragmas: [
                {
                  start: '/** @remove */',
                  end: '/** @endremove */'
                },
                {
                  start: '/** @delete */',
                  end: '/** @enddelete */'
                }
              ],
              consoles: {
                logs: true,
                warns: true,
                errors: true
              }
            }
          }
        ]
      }
    ]
  }
};
