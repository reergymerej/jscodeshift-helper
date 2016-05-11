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

    This is a `Node` of type "ObjectExpression."

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
        A `Node` (aka AST Node) is what you see in the AST Explorer.  This is the raw data about the code.

    References:
        https://github.com/facebook/jscodeshift/wiki/jscodeshift-Documentation#node-1
        http://astexplorer.net/


## v1.1 Changes

* describe generic objects
* improve description of Node props
* print inner Node props when describing NodePath
* print Node props before description

[jscodeshift]: https://github.com/facebook/jscodeshift "jscodeshift"
