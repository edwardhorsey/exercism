interface Idictionary {
  [key: string]: string
}

export class ProteinTranslation {
  static proteins( sequence: string ): string[] {
    const stop: string[] = ["UAA", "UAG", "UGA"];
    let index: number = 0;
    let output: string[] = [];
    while (index <= (sequence.length - 2)) {
      const codon = sequence.slice(index,index+3);
      if (stop.includes(codon)) break;
      output.push(ProteinTranslation.dictionary[codon]);
      index += 3;
    }
    return output;
  }

  static dictionary: Idictionary = {
    "AUG": "Methionine",
    "UUU": "Phenylalanine",
    "UUC": "Phenylalanine",
    "UUA": "Leucine",
    "UUG": "Leucine",
    "UCU": "Serine",
    "UCC": "Serine",
    "UCA": "Serine",
    "UCG": "Serine",
    "UAU": "Tyrosine",
    "UAC": "Tyrosine",
    "UGU": "Cysteine",
    "UGC": "Cysteine",
    "UGG": "Tryptophan",
  }
}

export default ProteinTranslation