<!-- @format -->

# webpack-loader-clean-pragma

A loader that removes `console.log`s, `console.warn`s, `console.error`s via `options` and any other parts of the source codes using special comments called `pragmas`.

# Install

`npm i webpack-loader-clean-pragma -D`

or

`yarn add webpack-loader-clean-pragma -D`

# Usage

On your webpack config, under `modules.rules`, use this like so:

```js
{
  test: /.js/,
  exclude: /node_modules/,
  use: [
    // other loaders,
    {
      loader: 'webpack-loader-clean-pragma',
      options: {
        /*
         * Pragmas are special comments used to delete parts of the codes
         * that you don't want to be included in the build.
         * They are objects that has a start and an end.
         * This option is optional
         */
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
        /*
         * Consoles is the option that you can specify if you want to delete
         * console.log, console.warn, and/or console.error.
         * This option is optional.
         */
        consoles: {
          logs: true,
          warns: true,
          errors: true
        }
      }
    }
  ]
}
```

Then somewhere in your code, you can do this:

## Pragmas

```js
/** @remove */
if (condition) {
  // some codes
}
/** @endremove */

// other codes

/** @delete */
if (condition) {
  // some codes
}
/** @enddelete */

console.log('Today is ' + new Date().toString() + '. \n' + "It's a good day.");
```

All `console.log`s, `console.error`s, and `console.warn`s will be removed regardless if they are in one line or multiple lines. Note that `semi-colon`s are required for this to work.
