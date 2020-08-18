interface old {
  [key: number]: string[];
}

interface newObj {
  [key: string]: number;
}
 
export const transform = (old: old): object => {
  let newObj: newObj = {};
  for (let prop in old) old[prop].forEach(letter => newObj[letter.toLowerCase()] = Number(prop));
  return newObj;
}