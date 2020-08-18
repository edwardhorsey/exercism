export interface BinarySearch {
  array: number[] | undefined;
}

export class BinarySearch {
  constructor(array: number[]) {
    this.array = array.every((num,index) => !index || array[index-1] <= num) ? array : undefined
  }

  indexOf = (num: number): number => {
    if (this.array) { 
      let start = 0;
      let end = this.array.length-1;
      while (start<end) {
        let middle = Math.floor((start+end)/2);
        if (this.array[middle] === num) return middle;
        this.array[middle] < num ? end = middle-1 : start = middle+1;
      }
    }
    return -1
  }
}