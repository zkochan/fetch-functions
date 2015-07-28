'use strict';
var expect = require('chai').expect;
var fetchFunctions = require('./');

describe('Fetch functions', function() {
  it('should fetch functions with the correct `this`', function(done) {
    function Foo() {}
    Foo.prototype = {
      bar: function() {
        expect(this).to.be.an.instanceof(Foo);
        done();
      },
      qar: function() {}
    };
    var foo = new Foo();

    var result = fetchFunctions(foo, ['bar']);
    result.bar();
    expect(result.qar).not.to.be.defined;
  });
});
