# jscodeshift-helper v1.1

a utility to help you explore [jscodeshift][jscodeshift]

It can be confusing understanding the difference between `Collection`s, `NodePath`s, and `Node`s, let alone which one you're looking at and what its API is.  This little helper will log what you're looking at, give you an API overview, and point you to references.

## Installation

```sh
npm i jscodeshift-helper
```

## Usage

```js
var describe = require('jscodeshift-helper').describe;

...

describe(something); // logs helpful info to the console
```

**Example Output**

    This is a `NodePath` wrapping the `Node`:

    { type: 'ObjectExpression',
      properties:
       [ Node {
           type: 'Property',
           start: 14,
           end: 20,
           loc: [Object],
           method: false,
           shorthand: false,
           computed: false,
           key: [Object],
           value: [Object],
           kind: 'init',
           decorators: null },
         Node {
           type: 'Property',
           start: 24,
           end: 62,
           loc: [Object],
           method: false,
           shorthand: false,
           computed: false,
           key: [Object],
           value: [Object],
           kind: 'init',
           decorators: null } ] }

    Description:
        A `NodePath` (aka `Path`) wraps the actual AST node (aka `Node`) and provides information such as scope and hierarchical relationship that is not available when looking at the node in isolation.  To access the wrapped Node, use `.node` or `.value`.

    Methods:
        canBeFirstInStatement -
        firstInStatement -
        getValueProperty -
        needsParens -
        prune -
        replace -

    Properties:
        parent - The wrapped AST node's parent, wrapped in another `NodePath`.
        scope - Scope information about the wrapped AST node.
        node - The wrapped AST node.
        value - Same as #node

    References:
        https://github.com/facebook/jscodeshift/wiki/jscodeshift-Documentation#nodepaths
        https://github.com/benjamn/ast-types#nodepath
        https://github.com/benjamn/ast-types#scope


## v1.1 Changes

* describe generic objects
* improve description of Node props
* print inner Node props when describing NodePath
* print Node props before description

[jscodeshift]: https://github.com/facebook/jscodeshift "jscodeshift"
