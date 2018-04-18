// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const maxWidth = n*n-1;
  let line = ' '.repeat(n);
  for (let i = 0; i < n; i++) {
    line = `#${line}`.slice(0, -1);
    const leftSideDashes = '#'.repeat(i);
    const leftSideSpaces = ' '.repeat(n-i-1);
    console.log(`${leftSideSpaces}${leftSideDashes}${line}`);
  }
}

module.exports = pyramid;
