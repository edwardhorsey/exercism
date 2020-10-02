export interface TwoBucket {
  buckOne: number,
  buckTwo: number,
  goal: number,
  starterBuck: string
}

export interface Bucket {
  One: string,
  Two: string
}

export class TwoBucket {
  constructor(buckOne, buckTwo, goal, starterBuck) {
    this.buckOne = buckOne;
    this.buckTwo = buckTwo;
    this.goal  = goal;
    this.starterBuck = starterBuck;
  }
}

export class Bucket {
  static One = 'one';
  static Two = 'two';
}

// create classes