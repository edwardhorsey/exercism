type T = Array<T> | undefined | number;

export class FlattenArray {
  static flatten(array: T[]): T[] {
      return array.reduce((acc: T[], item: T) => {
        return Array.isArray(item)
          ? [...acc, ...FlattenArray.flatten(item)]
          : typeof item === 'number' ? [...acc, item] : acc
      }, []);
    };
}