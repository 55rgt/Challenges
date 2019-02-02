function Box(x, y, z, r) {
  let that = this;
  this.pos = createVector(x, y, z);
  this.r = r;

  this.generate = function () {

    let children = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          let childRadius = that.r / 3;
          if (abs(x) + abs(y) + abs(z) <= 1) children.push(
              new Box(
                  that.pos.x + childRadius * x,
                  that.pos.y + childRadius * y,
                  that.pos.z + childRadius * z,
                  childRadius
              ));
        }
      }
    }
    return children;
  };

  this.show = function () {
    push();
    translate(that.pos.x, that.pos.y, that.pos.z);
    stroke(255);
    fill(30, 135, 41);
    box(that.r);
    pop();
  };
}
