//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (num) => {
  let binary = num.toString(2).split('').reverse();
  const reverse = binary.length > 4;
  const array = ['wink', 'double blink', 'close your eyes', 'jump'];
  let handshake = array.filter((el, i) => Number(binary[i]));
  return handshake = reverse ? handshake.reverse() : handshake;
};
