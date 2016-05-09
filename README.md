# jscodeshift-helper

a utility to help you explore [jscodeshift][jscodeshift]

It can be confusing understanding the difference between `Collection`s, `NodePath`s, and `Node`s, let alone which one you're looking at and what its API is.  This little helper will log what you're looking at, give you an API overview, and point you to references.

## Installation

```sh
npm i jscodeshift-helper
```

## Usage

```js
var describe = require('jscodeshift-helper');

...

describe(something); // logs helpful info to the console
```

**Example Output**

    This is a `Node` of type "Identifier."

    Description:
    	A `Node` (aka AST Node) is what you see in the AST Explorer.  This is the raw data about the code.

    Properties:
    	type - Identifier
    	start - 431
    	end - 432
    	loc - object
    	name - fooski
    	typeAnnotation - object

    References:
    	https://github.com/facebook/jscodeshift/wiki/jscodeshift-Documentation#node-1
    	http://astexplorer.net/


[jscodeshift]: https://github.com/facebook/jscodeshift "jscodeshift"
