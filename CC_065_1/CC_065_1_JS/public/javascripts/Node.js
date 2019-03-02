const UNIT_X = 150;
const UNIT_Y = 60;
const ROOT_Y = 32;
const RADIUS = 20;

function Node(state) {
  if (arguments.length === 0) {
    this.value = Math.floor(Math.random() * 100);
    this.parent = null;
    this.x = width / 2;
    this.y = ROOT_Y;
    this.depth = 0;
  } else {
    this.value = state.value;
    this.parent = state.parent;
    this.depth = state.parent.depth + 1;
    this.y = state.parent.y + UNIT_Y * (this.depth + 1) / 2;
    this.x = state.isLeft ? state.parent.x - UNIT_X / (this.depth) : state.parent.x + UNIT_X / (this.depth);
  }
  this.left = null;
  this.right = null;
}

Node.prototype.draw = function () {
  fill(0);
  if(this.parent !== null) line(this.parent.x, this.parent.y, this.x, this.y);
  fill(0);
  ellipse(this.x, this.y, RADIUS);
  fill(255);
  textAlign(CENTER);
  text(this.value, this.x, this.y + 4);
  stroke(1);
  if(this.left !== null) this.left.draw();
  if(this.right !== null) this.right.draw();
};

Node.prototype.insert = function (n) {
  n === this.value ? console.log('value already exists!') :
      n < this.value ?
          this.left === null ? this.left = new Node({
            value: n, parent: this, isLeft: true
          }) : this.left.insert(n) :
          this.right === null ? this.right = new Node({
            value: n, parent: this, isLeft: false
          }) : this.right.insert(n);
};
Node.prototype.remove = function (n) {

};
Node.prototype.search = function (n) {
  if (this.value === n) return this;
  else if (n < this.value && this.left !== null) return this.left.search(n);
  else if (n > this.value && this.right !== null) return this.right.search(n);
  return null;
};

// insert
