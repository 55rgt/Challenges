let angle = 0;
let sponge;

function setup() {
  createCanvas(720, 720, WEBGL);
  normalMaterial();
  sponge = [];
  sponge.push(new Box(0,0,0, 360));
}

function mousePressed() {
  let newSponge = [];
  _.forEach(sponge, (ele) => {
    newSponge = newSponge.concat(ele.generate());
  });
  sponge = newSponge;
}

function draw() {
  background(51);
  rotateX(angle);
  rotateY(angle * 0.12);
  rotateZ(angle * 0.28);
  _.forEach(sponge, (ele) => { ele.show(); });
  angle += 0.01;
}
