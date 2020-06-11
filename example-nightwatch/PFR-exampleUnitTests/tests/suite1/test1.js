const { expect } = require('chai');

module.exports = {

  beforeTest(done) {
    expectEquals('bar');
    done();
  },

  'example test': function() {
    expectEquals('bar');
  },
};

const expectEquals = (name) => {
  expect(name).to.equal('bar');
};
