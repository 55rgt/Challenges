function Star() {
    let that = this;
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = that.z;

    this.update = function () {
        that.z -= speed;
        if (that.z < 1) {
            that.x = random(-width, width);
            that.y = random(-height, height);
            that.z = width;
            that.pz = that.z;
        }
    };
    this.render = function () {

        fill(255);
        noStroke();

        let sx = map(that.x / that.z, 0, 1, 0, width);
        let sy = map(that.y / that.z, 0, 1, 0, height);

        // let r = map(that.z, 0, width , 16, 0);
        // ellipse(sx, sy, r, r);

        let px = map(that.x / that.pz, 0, 1, 0, width);
        let py = map(that.y / that.pz, 0, 1, 0, height);

        that.pz = that.z;

        stroke(255);
        line(px, py, sx, sy);
    };
}
