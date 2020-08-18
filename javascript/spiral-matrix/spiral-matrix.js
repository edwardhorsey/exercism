//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class SpiralMatrix {
  static ofSize(num) {
    let counterX = 0;
    let counterY = 0;
    let arrayMatrix = new Array(num).fill(0).map(() => new Array(num).fill(0));
    let highestNum = num**2;
    let counter = 1;
    let xlength = num;
    let ylength = num;

    while(counter<highestNum+1){

      for (let i = 0; i < xlength; i++) {
        arrayMatrix[counterY][counterX] = counter;
        counter++;
        i === xlength-1 ? counterX : counterX++;
      }

      counterY++;
      ylength--;

      for (let i = 0; i < ylength ; i++) {
        arrayMatrix[counterY][counterX] = counter;
        counter++;
        i === ylength-1 ? counterY : counterY++;
      }

      xlength--;
      counterX--;

      for (let i = 0 ; i < xlength; i++) {
        arrayMatrix[counterY][counterX] = counter;
        counter++;
        i === xlength-1 ? counterX : counterX--;
      }

      counterY--;
      ylength--;

      for (let i = 0; i < ylength ; i++) {
        arrayMatrix[counterY][counterX] = counter;
        counter++;
        i === ylength-1 ? counterY : counterY--;
      }

      counterX++;
      xlength--;

      }

    return arrayMatrix;
  }
}

