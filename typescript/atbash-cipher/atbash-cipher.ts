export interface AtbashCipher {
  revAlphabet: string[],
  alphabet: string[]
}

export class AtbashCipher {
  constructor() {
    this.revAlphabet = this.createAlphabet().reverse();
    this.alphabet = this.createAlphabet();
  }

  createAlphabet = () => [...Array(26).keys()].map((index) => String.fromCharCode(index+97));
  
  format = (string: string): string[] => string.replace(/[\s\W/]+/g, '').trim().toLowerCase().split('');
  
  encode = (string: string): string => {
    let format = this.format(string);
    return format.reduce((acc: string, item, index) => {
      const encodedItem = Number(item) ? item : this.revAlphabet[this.alphabet.indexOf(item)];
      if ((index+1) % 5 === 0) {
        return index === format.length-1 ? acc + encodedItem : acc + encodedItem + ' ';
      } else {
        return acc + encodedItem;
      }
    }, '');
  }
  
  decode = (string: string): string => {
    return string.split('').reduce((acc: string, item) => {
      const encodedItem = Number(item) ? item : this.alphabet[this.revAlphabet.indexOf(item)];
      return item === ' ' ? acc : acc + encodedItem;
    }, '');
  }
}