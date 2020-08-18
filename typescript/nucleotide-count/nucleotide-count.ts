interface dna {
  [key: string]: number,
}

class NucleotideCount {
  static nucleotideCounts( string: string ): object {
    const object: dna = { A: 0, C: 0, G: 0, T: 0 };
    if (!string) return object;
    if(/^[ACGT]+$/.test(string)) {
      string.split('').forEach(letter => object[letter]++);
      return object;
    } else {
      throw new Error("Invalid nucleotide in strand");
    }
  }
}

export default NucleotideCount;