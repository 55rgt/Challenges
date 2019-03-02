function Tree(node) { this.root = node; }
Tree.prototype.insert = function (n) { this.root.insert(n); };
Tree.prototype.remove = function (n) { this.root.remove(n); };
Tree.prototype.search = function (n) { this.root.search(n); };
Tree.prototype.draw = function () { this.root.draw(); };
