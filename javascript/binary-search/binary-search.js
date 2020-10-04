export const find = (list, item) => {
  if (list.length === 1) return 0;
  let middleIndex = Math.floor(list.length / 2);
  let min = 0;
  let max = list.length - 1;
  while (max >= min) {
    middleIndex = Math.floor((min + max) / 2);
    if (list[middleIndex] === item) {
      return middleIndex;
    } else if (item > list[middleIndex]) {
      min = middleIndex + 1;
    } else if (item < list[middleIndex]) {
      max = middleIndex - 1;
    }
  }
  throw Error("Value not in array");
};
