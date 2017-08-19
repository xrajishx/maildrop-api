const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const path = require('path');

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
