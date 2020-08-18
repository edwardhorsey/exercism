//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (rounds) => {
  if (!rounds) {return []} else {
    let arr = [[1]];
    for (let i=0; i<rounds-1; i++){
      let temp = [0, ...arr[i], 0];
      arr.push(temp.map((el,i) => el + temp[i+1]).slice(0, temp.length-1));
    }
    return arr
  }
};
