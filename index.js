// function getProps(item) {
//   return Object.keys(item).sort();
// }

// function getProtoProps(instance, functions = false) {
//   return getProps(instance.constructor.prototype)
//     .filter(prop => functions 
//       ? typeof instance.constructor.prototype[prop] === 'function'
//       : typeof instance.constructor.prototype[prop] !== 'function'
//     )
//     .filter(prop => prop[0] !== '_');
// }

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

function describeCollection(collection) {
  var size = collection.size();
  var types = collection.getTypes();
  var methods = {
    at: 'Returns a new collection containing only the element at position index. In case of a negative index, the element is taken from the end.',
    filter: 'Returns a new collection containing the nodes for which the callback returns true.',
    forEach: 'Executes callback for each node/path in the collection.',
    get: 'Proxies to NodePath#get of the first path.',
    getAST: '',
    getTypes: '',
    isOfType: 'Returns true if this collection has the type `type`.',
    map: 'Executes the callback for every path in the collection and returns a new collection from the return values (which must be paths). The callback can return null to indicate to exclude the element from the new collection. If an array is returned, the array will be flattened into the result collection.',
    nodes: 'Returns an array of AST nodes in this collection.',
    paths: '',
    size: 'Returns the number of elements in this collection.',
    toSource: 'Returns pretty printed JS code.',
  };

  var description = 'A `Collection` is a generic collection of `NodePath`s. It only has a generic API to access and process the elements of the list. It doesn\'t know anything about AST types.';
  var references = [
    'https://github.com/facebook/jscodeshift/blob/master/src/Collection.js',
    'https://github.com/facebook/jscodeshift/wiki/jscodeshift-Documentation#collections',
  ];

  return [
    '\nThis is a Collection with ' + size + ' item(s) of types: ' + types.join(', ') + '.',
    printDescription(description),    
    printMethods(methods),
    printReferences(references),
  ].join('\n\n');
}

// function describeNodePath(nodePath) {
//   var description = 'The `NodePath` object passed to visitor methods is a wrapper around an AST node (aka `Node`), and it serves to provide access to the chain of ancestor objects (all the way back to the root of the AST) and scope information.\n\n'
//     + 'Use nodePath.node or nodePath.value to get the raw AST node.\n\n'
//     + 'Use nodePath.getValueProperty(\'foo\') to get the wrapped AST node\'s `foo` property as a raw AST node.\n\n'
//     + 'Use nodePath.get(\'foo\') to get the wrapped AST node\'s `foo` property wrapped in another NodePath.\n\n'
//     + 'API: https://github.com/benjamn/ast-types#nodepath.';
//   var lines = [
//     `\nThis is a \`NodePath\` wrapping a node of type "${ nodePath.node.type }."`,
//     'Description:',
//     description,    
//   ];

//   var props = [
//     'node',
//     'parent',
//     'scope',
//   ];
//   var methods = getProtoProps(nodePath, true).sort();

//   lines.push(`Props:\n\t${ props.join('\n\t') }`);
//   lines.push(`Methods:\n\t${ methods.join('\n\t') }`);

//   return lines.join('\n\n');
// }

// function describeNode(node) {
//   var description = '`Node`s (aka AST Nodes) are what you see in the AST Explorer.  This is the raw data about the code.';
//   var lines = [
//   `\nThis is a \`Node\` of type ${ node.type }.`,
//     'Description:',
//     description,    
//   ];

//   var props = getProps(node).map(prop => {
//     var value = node[prop];
//     if (typeof value === 'string' || typeof value === 'number') {
//       return `${ prop }: ${ value }`;
//     } else {
//       return `${ prop }: [${ typeof value }]`;
//     }
//   })
//   lines.push(`Props:\n\t${ props.join('\n\t') }`);

//   return lines.join('\n\n');
// }

// function describeGeneric(item) {
//   return item;
// }

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
