let tree;
function setup() {
  const selector = {
    insertButton: select('#insertButton'),
    removeButton: select('#removeButton'),
    searchButton: select('#searchButton'),
    insertValue: select('#insertValue'),
    removeValue: select('#removeValue'),
    searchValue: select('#searchValue'),
  };
  const sketch = 'sketch-holder';
  const sketchHolder = document.getElementById(sketch);
  const canvas = createCanvas(sketchHolder.offsetWidth, sketchHolder.offsetHeight);
  canvas.parent(sketch);
  tree = new Tree(new Node());
  selector.insertButton.mousePressed(() => tree.insert(parseInt(selector.insertValue.value())));
  selector.removeButton.mousePressed(() => tree.remove(parseInt(selector.removeValue.value())));
  selector.searchButton.mousePressed(() => tree.search(parseInt(selector.searchValue.value())));
}

function draw() { tree.draw(); }

