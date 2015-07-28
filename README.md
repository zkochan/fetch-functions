# fetch-functions

Fetches a list of specified functions from an object leaving the objects context.

[![Dependency Status](https://david-dm.org/zkochan/fetch-functions/status.svg?style=flat)](https://david-dm.org/zkochan/fetch-functions)
[![Build Status](https://travis-ci.org/zkochan/fetch-functions.svg?branch=master)](https://travis-ci.org/zkochan/fetch-functions)
[![npm version](https://badge.fury.io/js/fetch-functions.svg)](http://badge.fury.io/js/fetch-functions)


## Installation

```
npm install --save fetch-functions
```


## Usage

```js
var fetch = require('fetch-functions');

function HelloWorld() {
  this._msg = 'Hello world!';
}

HelloWorld.prototype.log = function() {
  console.log(this._msg);
};

HelloWorld.prototype.info = function() {
  console.info(this._msg);
};

HelloWorld.prototype.error = function() {
  console.error(this._msg);
}

var helloWorld = new HelloWorld();

var dummy = fetch(helloWorld, ['log']);
dummy.log(); /* This will log `Hello world!` */
```


## License

MIT
