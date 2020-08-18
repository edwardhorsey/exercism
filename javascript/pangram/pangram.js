//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => Array.from(new Set(sentence.toLowerCase().match(/[a-z]/g))).length === 26;
