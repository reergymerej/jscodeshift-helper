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