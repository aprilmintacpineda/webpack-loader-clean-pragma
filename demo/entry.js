/** @format */

// eslint-disable-next-line
console.log(`
  This
  will
  be
  removed
`);
console.log('Will be removed too'); // eslint-disable-line

console.warn('a warning');

console.error('an error');

/** remove */
const a = 1 + 1;
/** endremove */

console.log(a);

/** @delete */
const b = 2 * 2;
/** @enddelete */

console.log(b);
