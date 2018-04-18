// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = [...str].reduce((accumulator, char) => {
    const newValue = accumulator[char] + 1 || 1;
    return { ...accumulator, [char]: newValue };
  }, {});
  return Object
    .keys(obj)
    .reduce((a, b) => obj[a] > obj[b] ? a : b);
}

module.exports = maxChar;
