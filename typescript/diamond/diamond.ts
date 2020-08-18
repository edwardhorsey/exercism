export class Diamond {
  makeDiamond = (string: string) => {
    const charCode = string.charCodeAt(0);
    const difference = charCode - 64;
    let diamond: string[] = [];
    for (let i=0; i<difference; i++) {
      let half: string[] = ([...Array(difference)].map((_, index) => index === i? String.fromCharCode(65+i) : ' '));
      diamond.push([...half.slice(1).reverse(), ...half].join('')+'\n')
    }
    return [...diamond, ...diamond.slice(0, difference-1).reverse()].join('');
  }
}