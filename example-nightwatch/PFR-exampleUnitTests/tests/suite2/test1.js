const { expect } = require('chai');

module.exports = {
  'test': {
    testSmth() {
      expect(false).to.be.ok;
    },
    testSmth2() {
      expect(true).to.be.ok;
    },
  },
};
