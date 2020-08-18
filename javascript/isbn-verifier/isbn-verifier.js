//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const stripHyphens = str => str.replace(/-/g, '');

export const isValid = (str) => {
  let output = stripHyphens(str);
  if (output.length === 10) {
    let multiplier = 11;
    return output.split('').reduce((acc, el, i) => {
      el = (i === 9 && el === 'X') ? 10 : el;
      multiplier--;
      return acc + el*multiplier;
    }, 0) % 11 === 0;
  } else {
  return false
  }
};