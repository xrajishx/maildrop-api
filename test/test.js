const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const path = require('path');
const decache = require('decache');

const maildrop = require(path.join(__dirname, '..', 'src', 'maildrop'));

chai.use(chaiAsPromised);
chai.should();

const mailBox = 'john';

describe('suggestion()', () => {
  it('should be fulfilled with a string without error', () => {
    return maildrop.suggestion()
      .should.eventually.be.fulfilled.and.be.a('string');
  });
});

describe('blocked()', () => {
  it('should be fulfilled with a number without error', () => {
    return maildrop.blocked()
      .should.eventually.be.fulfilled.and.be.a('number');
  });
});

describe('getInbox(mailBox)', () => {
  it('should be fulfilled with an array without error', () => {
    return maildrop.getInbox(mailBox)
      .should.eventually.be.fulfilled.and.be.an('array');
  });
});

describe('getInbox()', () => {
  it('should be rejected with error', () => {
    return maildrop.getInbox()
      .should.eventually.be.rejected.and.be.an('error');
  });
});

describe('getEmail(mailBox, mailBox)', () => {
  it('should be fulfilled with an object without error', () => {
    return maildrop.getEmail(mailBox, mailBox)
      .should.eventually.be.fulfilled.and.be.an('object');
  });
});

describe('getEmail()', () => {
  it('should be rejected with error', () => {
    return maildrop.getEmail()
      .should.eventually.be.rejected.and.be.an('error');
  });
});

describe('deleteEmail(mailBox, mailBox)', () => {
  it('should be fulfilled with an object without error', () => {
    return maildrop.deleteEmail(mailBox, mailBox)
      .should.eventually.be.fulfilled.and.be.an('object');
  });
});

describe('deleteEmail()', () => {
  it('should be rejected with error', () => {
    return maildrop.deleteEmail()
      .should.eventually.be.rejected.and.be.an('error');
  });
});

// To test the error handling we shall set MAILDROP_URL env and re-require
// the maildrop module
process.env.MAILDROP_URL = 'http://localhost100'

decache(path.join(__dirname, '..', 'src', 'maildrop'));
const maildrop_error = require(path.join(__dirname, '..', 'src', 'maildrop'));

describe('suggestion() - error handling', () => {
  it('should be rejected with an error', () => {
    return maildrop_error.suggestion()
      .should.eventually.be.rejected.and.be.an('error');
  });
});

describe('blocked() - error handling', () => {
  it('should be rejected with an error', () => {
    return maildrop_error.blocked()
      .should.eventually.be.rejected.and.be.an('error');
  });
});

describe('getInbox(mailBox) - error handling', () => {
  it('should be rejected with error', () => {
    return maildrop_error.getInbox(mailBox)
      .should.eventually.be.rejected.and.be.an('error');
  });
});

describe('getEmail(mailBox, mailBox) - error handling', () => {
  it('should be rejected with error', () => {
    return maildrop_error.getEmail(mailBox, mailBox)
      .should.eventually.be.rejected.and.be.an('error');
  });
});

describe('deleteEmail(mailBox, mailBox) - error handling', () => {
  it('should be rejected with error', () => {
    return maildrop_error.deleteEmail(mailBox, mailBox)
      .should.eventually.be.rejected.and.be.an('error');
  });
});
