export const Proverb = (...args: string[]): string => {
  const words = [...args];
  return words.reduce((acc, item, index) => {
    return index === words.length - 1 ? (
      acc + `And all for the want of a ${words[0]}.`
    ) : (
      acc + `For want of a ${item} the ${words[index+1]} was lost.\n`
    );
  }, '');
}

export default Proverb