export interface RobotName {
  name: string;
}

export class RobotName {
  constructor() {
    this.name = this.generateName()
  }

  generateName = (): string => {
    const nameString: string = `${this.generateLetter()}${this.generateLetter()}${this.generateNumber()}${this.generateNumber()}${this.generateNumber()}`
    if (RobotName.unique(nameString)) {
      RobotName.addToAllNames(nameString);
      return nameString
    } else {
      return this.generateName();
    }
  }
  
  generateLetter = (): string => String.fromCharCode(Math.floor(Math.random()*26+65));
  
  generateNumber = (): number => Math.floor(Math.random()*9+1);
  
  resetName = () => this.name = this.generateName();
  
  static allNames: string[] = [];

  static addToAllNames = (name: string) => RobotName.allNames.push(name);
  
  static unique = (name: string): boolean => !RobotName.allNames.includes(name);

}