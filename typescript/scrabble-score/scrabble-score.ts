const scrabble =  [
  ['A, E, I, O, U, L, N, R, S, T', 1,],
  ['D, G', 2,],
  ['B, C, M, P', 3,],
  ['F, H, V, W, Y', 4,],
  ['K', 5,],
  ['J, X', 8,],
  ['Q, Z', 10,]
]

export const score = (string: string|undefined): number => {
  let total = 0;
  if (!string) return total;
  let scrabbleMap = new Map();
  scrabble.forEach(scores => scrabbleMap.set(scores[0], scores[1]));
  [...string.toLowerCase()].forEach(letter => {
    scrabbleMap.forEach((score, tiles) => {
      if (tiles.toLowerCase().includes(letter)) total += score;
    });
  })
  return total;
}