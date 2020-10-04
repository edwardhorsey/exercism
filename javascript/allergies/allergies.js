export class Allergies {
  constructor(allergyScore) {
    this.allergyScore = allergyScore > 256 ? allergyScore % 256 : allergyScore;
    this.allergiesList = this.calculate(this.allergyScore);
  }

  dict = {
    128: "cats",
    64: "pollen",
    32: "chocolate",
    16: "tomatoes",
    8: "strawberries",
    4: "shellfish",
    2: "peanuts",
    1: "eggs",
  };

  calculate = (number) =>
    Object.keys(this.dict)
      .reverse()
      .reduce((acc, item) => {
        if (item <= number) {
          number -= item;
          return [this.dict[item], ...acc];
        } else {
          return acc;
        }
      }, []);

  list = () => this.allergiesList;

  allergicTo = (allergy) => this.allergiesList.includes(allergy);
}
