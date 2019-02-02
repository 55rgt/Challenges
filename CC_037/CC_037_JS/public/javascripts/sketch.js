let seed;
let button;
let srcText;
let words;

function preload() {
  srcText = loadStrings('../data/linkin park.txt');
} 

function diastic(seed, words) {

  console.log("in");

  let phrase = "";
  let idx = 0;

  for(let i = 0 ; i < seed.length ; i++) {
    let alphabet = seed[i];
    for(let j = idx ; j < words.length ; j++) {
      let word = words[j];
      if(word[i] === alphabet) {
        phrase += (' ' + word);
        idx = j + 1;
        break;
      }
    }
  }
  return phrase;
}

function setup() {
  noCanvas();
  srcText = join(srcText, ' ');
  words = splitTokens(srcText,' ,!?"\'.');
  seed = select("#seed");
  button = select("#submit");

  button.mousePressed(() => {
    let phrase = (diastic(seed.value(), words));
    createP(phrase);
  });
}
