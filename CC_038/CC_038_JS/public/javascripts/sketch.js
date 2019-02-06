let textField;
let submit;
let output;


function setup() {
  noCanvas();
  textField = select('#textarea');
  submit = select('#submit');
  output = select('#output');
  submit.mousePressed(() => {
    let s = textField.value();
    let words = s.split(/(\W+)/);
    for (let i = 0; i < words.length; i++) {
      let span = createSpan(words[i]);
      span.parent(output);
      if(!/\W+/.test(words[i])) {
        span.mouseOver(function() {
          console.log(this.html());
          this.html('rainbow');
          let c = color(random(255),random(255),random(255));
          this.style('background-color', c);
        });
      }
    }
    console.log(words);
  });

}
