//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {

  constructor(key) {
    this._key = key ? key.toLowerCase() :  this.randomKey()
  }
  
  encode(string) {
    return string.split('').map((el, i)=>{
      let keyPosition = this._key[i] ? this._key[i] : this.key[i % this._key.length ];
      let difference = keyPosition.charCodeAt(0) - 97;
      let thisLetterString = el.charCodeAt(0);
      if (thisLetterString + difference > 122) {thisLetterString -= 26}
      return String.fromCharCode(thisLetterString + difference)}
    ).join('')
  }
  
  decode(string) {
    return string.split('').map((el, i)=>{
      let keyPosition = this._key[i] ? this._key[i] : this.key[i % this._key.length];
      let difference = keyPosition.charCodeAt(0) - 97;
      let thisLetterString = el.charCodeAt(0);
      if (thisLetterString - difference < 97) {thisLetterString += 26}
      return String.fromCharCode(thisLetterString - difference)}
    ).join('')
  }
  
  get key() {
    return this._key;
  }
  
  randomKey() {
    let arr = [];
    for(let i=0; i<100; i++) {
      arr.push(String.fromCharCode(Math.floor(Math.random()*26)+97))
    }
    return arr.join('')
  }
}
