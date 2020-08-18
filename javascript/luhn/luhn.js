//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const trimWhiteSpace = str => str.replace(/\s+/g, '').trim();

export const valid = (str) => {
  let output = trimWhiteSpace(str);
  if (output.length > 1) {    
    output = output.split('').reverse().map((num, i) => {
      if (i % 2 === 1) {
        return (num * 2) > 9 ? (num * 2) - 9 : (num * 2);
      } else {
        return Number(num);
      }
    });
    return output.reduce((a,b) => a+b) % 10 === 0;
  }
  return false
};
