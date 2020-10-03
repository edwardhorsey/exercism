export interface TwoBucket {
  buckOne: Bucket;
  buckTwo: Bucket;
  goal: number;
  starterBuck: string;
  otherBucket: number;
  goalBucket: string;
}

export interface Bucket {
  capacity: number;
  amount: number;
}

export class TwoBucket {
  constructor(
    buckOne: number,
    buckTwo: number,
    goal: number,
    starterBuck: string
  ) {
    this.buckOne = new Bucket(buckOne);
    this.buckTwo = new Bucket(buckTwo);
    this.goal = goal;
    this.starterBuck = starterBuck;
    this.otherBucket = 0;
    this.goalBucket = "";
  }
  moves = () => {
    const a: Bucket = this.starterBuck === "one" ? this.buckOne : this.buckTwo;
    const b: Bucket = this.starterBuck === "one" ? this.buckTwo : this.buckOne;
    let count: number = 1;
    a.fill();
    while (a.amount !== this.goal && b.amount !== this.goal) {
      if (b.full) {
        b.empty();
      } else if (!a.amount) {
        a.fill();
      } else if (a.full || (a.amount && b.amount < b.capacity)) {
        const amountToTransfer = a.amount <= b.free ? a.amount : b.free;
        b.amount += amountToTransfer;
        a.amount -= amountToTransfer;
      }
      count += 1;
    }
    this.goalBucket = this.buckOne.amount === this.goal ? "one" : "two";
    this.otherBucket = a.amount === this.goal ? b.amount : a.amount;
    return count;
  };
}

export class Bucket {
  constructor(capacity: number) {
    this.capacity = capacity;
    this.amount = 0;
  }
  get free() {
    return this.capacity - this.amount;
  }
  get full() {
    return this.capacity === this.amount;
  }
  fill = () => (this.amount += this.capacity);
  empty = () => (this.amount = 0);
  static One = "one";
  static Two = "two";
}
