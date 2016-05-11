var util = require('util');

function printReferences(references) {
  return 'References:\n\t' + references.join('\n\t');
}

function printDescription(description) {
  return 'Description:\n\t' + description;
}

function printMethods(methods) {
  return 'Methods:\n\t' + Object.keys(methods).map(function (name) {
    return name + ' - ' + methods[name];
  }).join('\n\t');
}

function printProps(props) {
  return 'Properties:\n\t' + Object.keys(props).map(function (name) {
    return name + ' - ' + props[name];
  }).join('\n\t');
}

function describeCollection(collection) {
  var size = collection.size();
  var types = collection.getTypes();
  var methods = {
    at: 'Returns a new collection containing only the element at position index. In case of a negative index, the element is taken from the end.',
    childElements: '',
    childNodes: '',
    closest: '',
    closestScope: '',
    filter: 'Returns a new collection containing the nodes for which the callback returns true.',
    findJSXElements: '',
    findJSXElementsByModuleName: '',
    findVariableDeclarators: '',
    forEach: 'Executes callback for each node/path in the collection.',
    get: 'Proxies to NodePath#get of the first path.',
    getAST: '',
    getTypes: '',
    getVariableDeclarators: '',
    insertAfter: '',
    insertBefore: '',
    isOfType: 'Returns true if this collection has the type `type`.',
    map: 'Executes the callback for every path in the collection and returns a new collection from the return values (which must be paths). The callback can return null to indicate to exclude the element from the new collection. If an array is returned, the array will be flattened into the result collection.',
    nodes: 'Returns an array of AST nodes in this collection.',
    paths: '',
    remove: '',
    renameTo: '',
    replaceWith: '',
    size: 'Returns the number of elements in this collection.',
    toSource: 'Returns pretty printed JS code.',
  };

  var description = 'A `Collection` is a generic collection of `NodePath`s. It only has a generic API to access and process the elements of the list. It doesn\'t know anything about AST types.';
  var references = [
    'https://github.com/facebook/jscodeshift/wiki/jscodeshift-Documentation#collections',
    'https://github.com/facebook/jscodeshift/blob/master/src/Collection.js',
  ];

  return [
    '\nThis is a Collection with ' + size + ' item(s) of types: ' + types.join(', ') + '.',
    printDescription(description),
    printMethods(methods),
    printReferences(references),
  ].join('\n\n');
}

function describeNodePath(nodePath) {
  var methods = {
    canBeFirstInStatement: '',
    firstInStatement: '',
    getValueProperty: '',
    needsParens: '',
    prune: '',
    replace: '',
  };

  var props = {
    parent: 'The wrapped AST node\'s parent, wrapped in another `NodePath`.',
    scope: 'Scope information about the wrapped AST node.',
    node: 'The wrapped AST node.',
    value: 'Same as #node',
  };

  var description = 'A `NodePath` (aka `Path`) wraps the actual AST node (aka `Node`) and provides information such as scope and hierarchical relationship that is not available when looking at the node in isolation.';

  var references = [
    'https://github.com/facebook/jscodeshift/wiki/jscodeshift-Documentation#nodepaths',
    'https://github.com/benjamn/ast-types#nodepath',
    'https://github.com/benjamn/ast-types#scope',
  ];

  return [
    '\nThis is a `NodePath` wrapping a `Node` of type "' + nodePath.node.type + '".',
    printDescription(description),
    printMethods(methods),
    printProps(props),
    printReferences(references),
  ].join('\n\n');
}

function describeNode(node) {
  var description = 'A `Node` (aka AST Node) is what you see in the AST Explorer.  This is the raw data about the code.';

  var props = {};

  Object.keys(node).map(function (prop) {
    var value = node[prop];
    props[prop] = (typeof value === 'string' || typeof value === 'number')
      ? value
      : typeof value;
  });

  var references = [
    'https://github.com/facebook/jscodeshift/wiki/jscodeshift-Documentation#node-1',
    'http://astexplorer.net/',
  ];

  return [
    '\nThis is a `Node` of type "' + node.type + '."',
    printDescription(description),
    printProps(props),
    printReferences(references),
  ].join('\n\n');
}

function describeGeneric(item) {
  return [
    '\nThis is a generic object.',
    util.inspect(item),
  ].join('\n\n');
}

function describe(entity) {
  var description;
  var type = entity.constructor.name;

  switch (type) {
    case 'Collection':
      description = describeCollection(entity);
      break;

    case 'NodePath':
      description = describeNodePath(entity);
      break;

    case 'Node':
      description = describeNode(entity);
      break;

    default:
      description = describeGeneric(entity);
  }

  var line = '---------------------------------------'
  console.log('\n' + line + description + '\n');
}

module.exports = {
  describe: describe,
};
