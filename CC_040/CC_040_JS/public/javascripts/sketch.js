let txt = [], counts = {}, keys = [], wordList = [];

const files = ['sum41.txt', 'linkin park.txt', 'jamiroquai.txt', 'eminem.txt', 'pentatonix.txt', 'jason mraz.txt'];

function preload() {
  for (let i = 0; i < files.length; i++) txt[i] = loadStrings(`../data/${files[i]}`);
}

function setup() {
  for (let i = 0; i < txt.length; i++) wordList[i] = txt[i].join('\n');
  let tokens = wordList[0].split(/\W+/);
  for (let i = 0; i < tokens.length; i++) {
    let word = tokens[i].toLowerCase();
    if (counts[word] === undefined) {
      counts[word] = { tf: 1, df: 1 };
      keys.push(word);
    } else counts[word].tf = counts[word].tf + 1;
  }

  let otherCounts = [];
  for (let j = 1; j < wordList.length; j++) {
    let tempCounts = {};
    tokens = wordList[j].split(/\W+/);
    for (let k = 0; k < tokens.length; k++) {
      let w = tokens[k].toLowerCase();
      if (tempCounts[w] === undefined) tempCounts[w] = true;
    }
    otherCounts.push(tempCounts);
  }
  for (let i = 0; i < keys.length; i++) {
    let word = keys[i];
    for (let j = 0; j < otherCounts.length; j++) {
      let tempCounts = otherCounts[j];
      if (tempCounts[word]) counts[word].df++;
    }
  }

  for (let i = 0; i < keys.length; i++) {
    let word = keys[i];
    let wordObj = counts[word];
    wordObj.tfidf = (wordObj.tf * Math.log(files.length / wordObj.df)).toFixed(5);
  }
  keys.sort((a,b) => counts[b].tfidf - counts[a].tfidf);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    createDiv(`${key}:\t\t\t${counts[key].tfidf}`);
  }
  noCanvas();
}
