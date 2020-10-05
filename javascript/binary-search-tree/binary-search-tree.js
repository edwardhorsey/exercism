export class BinarySearchTree {
  constructor(data) {
    this._data = data;
    this._left;
    this._right;
  }

  get data() {
    return this._data;
  }

  get right() {
    return this._right;
  }

  get left() {
    return this._left;
  }

  each = (passedIn) => {
    if (this.left) this.left.each(passedIn);
    passedIn(this.data);
    if (this.right) this.right.each(passedIn);
  };

  insert(number) {
    if (number <= this.data) {
      this.left
        ? this.left.insert(number)
        : (this._left = new BinarySearchTree(number));
    } else {
      this.right
        ? this.right.insert(number)
        : (this._right = new BinarySearchTree(number));
    }
  }
}
