const publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1BOxyAsmXz7FGfs5ga5dIAvn3xBS8kKKNFKhcg2PsXnw/edit?usp=sharing';
let data;
let text = "$$Exclamation$$! " +
    "they said $$Adverb$$ as they jumped into their " +
    "$$Noun$$ and flew off with their " +
    "$$Adjective$$ $$Plural Noun$$.";

function setup() {
  noCanvas();
  Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: getData,
    simpleSheet: true
  });

  let button = createButton('generateMadLib');
  button.mousePressed(generate);
}

function generate() {
  let madLib = text.replace(/\$\$(.*?)\$\$/g, replacer);
  createP(madLib);

}

function replacer(match, pos) {
  let entry = random(data);
  return entry[pos];
}

function getData(stuff) {
  data = stuff;
  console.log(data);
}
