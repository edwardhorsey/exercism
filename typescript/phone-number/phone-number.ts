export interface PhoneNumber {
  phoneNumber: string;
}

export class PhoneNumber {
  constructor(string: string) {
    this.phoneNumber = string;
  }

  trim = (string: string) => string.replace(/^1|[\W\s]/g, '');

  number = ():string|undefined => this.trim(this.phoneNumber).length === 10 ? this.trim(this.phoneNumber) : undefined;
}