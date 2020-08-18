export interface Matrix {
  string: string,
  _rows: string[][],
  _columns: number[][]
}

export class Matrix {
  constructor(string: string) {
    this.string = string;
    this._rows = string.split('\n').map(row=>row.split(' '));
    this._columns = [];
  }

  get rows() {
    return this._rows.map(row => row.map(item => Number(item)));
  }

  get columns() {
    for (let i=0; i<this.rows[0].length; i++){
      this._columns.push(this.rows.map(row => row[i]));
    }
    return this._columns;
  }
}