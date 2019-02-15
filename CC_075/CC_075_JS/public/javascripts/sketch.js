const openSearchURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=';
const contentURL = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&origin=*&titles=';

function setup() {
  noCanvas();
  const userInput = select('#userInput');
  userInput.changed(openSearch);

  function openSearch() {
    let term = userInput.value();
    let url = openSearchURL + term;
    loadJSON(url, gotData);
  }
  function gotData(data) {
    let randIndex = Math.floor(random(data[1].length));
    let title = data[1][randIndex];
    title = title.replace(/\s+/g, '_');
    createDiv(title);
    let url = contentURL + title;
    console.log(url);
    loadJSON(url, gotContent);
  }
  function gotContent(data) {
    let page = data.query.pages;
    let pageId = Object.keys(data.query.pages)[0];
    console.log(pageId);
    let content = page[pageId].revisions[0]['*'];
    console.log(content);
  }

}
