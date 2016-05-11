var describe = require('../index').describe;

module.exports = function (fileInfo, api) {
  var j = api.jscodeshift

  var collection = j(fileInfo.source).find(j.ObjectExpression);
  var nodePath = collection.get(0);
  var node = nodePath.node;

  describe(collection);
  describe(nodePath);
  describe(node);
  describe({ foo: 'bar' });
};
