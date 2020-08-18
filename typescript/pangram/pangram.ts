export interface Pangram {
  sentence: string
}

export class Pangram {
  constructor(sentence: string) {
    this.sentence = sentence;
  }
  isPangram = () => Array.from(new Set(this.sentence.toLowerCase().match(/[a-z]/g))).length === 26;
}