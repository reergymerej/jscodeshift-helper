var app = require('../index');

function Collection () {}
Collection.prototype.size = function () {
  return 2;
};
Collection.prototype.getTypes = function () {
  return ['foo', 'bar', 'baz'];
};

var collection = new Collection();
app.describe(collection);
// ---------------------------------------

function NodePath () {}
NodePath.prototype.node = {
  type: 'foo',
};

var nodePath = new NodePath();
app.describe(nodePath);
// ---------------------------------------

function Node () {
  this.type = 'foo';
  this.bar = 1;
  this.baz = [1,2,3];
  this.quux = {};
}

var node = new Node();
app.describe(node);
// ---------------------------------------

app.describe({
  string: 'foo',
  number: 99,
  array: [],
  object: {
    foo: 'bar',
    quux: '?',
  },
});

app.describe('hello');
