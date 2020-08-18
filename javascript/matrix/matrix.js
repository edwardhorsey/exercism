//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(string) {
    this.string = string;
    this._rows = string.split('\n').map(e=>e.split(' '));
    this._columns = [];
    
  }

  get rows() {
    return this._rows.map(e=>{
      return e.map(f=>{
        return Number(f);
      })
    })
  }

  get columns() {
    for (let i=0; i<this.rows[0].length;i++){
      this._columns.push(this.rows.map(e=>e[i]));
    }
    return this._columns;
  }
}
