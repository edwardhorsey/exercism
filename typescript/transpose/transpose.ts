export class Transpose {
  static transpose(array: string[]): string[] {
    const longest: number = array.reduce((a, b) => a.length < b.length ? b : a, "").length;
    let answer: string[] = [];
    for (let i=0; i<longest; i++) {
      const newRow = array.reduce((acc, row) => acc + (row[i]? row[i] : /^\s*$/.test(acc) ? ' ' : ''), '');
      answer.push(newRow);
    }
    return answer;
  }
}