/** @format */

module.exports = function (content) {
  const callback = this.async();

  new Promise((resolve, reject) => {
    let codes = content;

    // remove special comments
    if (this.query.pragmas) {
      for (let a = 0; a < this.query.pragmas.length; a++) {
        let startIndex = codes.indexOf(this.query.pragmas[a].start);

        while (startIndex !== -1) {
          const endIndex = codes.indexOf(this.query.pragmas[a].end);
          if (endIndex === -1) {
            reject(
              new Error(
                'webpack-loader-clean-pragma: Ending pair not found `' +
                  this.query.pragmas[a].end +
                  '` at ' +
                  this.resourcePath
              )
            );
          }
          codes =
            codes.substring(0, startIndex) +
            codes.substring(endIndex + this.query.pragmas[a].end.length);
          startIndex = codes.indexOf(this.query.pragmas[a].start);
        }
      }
    }

    // strip off consoles
    if (this.query.consoles) {
      if (this.query.consoles.logs) {
        codes = codes.replace(/console\.log\((.|\n)*?\);/gim, '');
      }

      if (this.query.consoles.warns) {
        codes = codes.replace(/console\.warn\((.|\n)*?\);/gim, '');
      }

      if (this.query.consoles.errors) {
        codes = codes.replace(/console\.error\((.|\n)*?\);/gim, '');
      }

      resolve(codes);
    } else {
      resolve(codes);
    }
  }).then(codes => {
    callback(null, codes);
  });
};
