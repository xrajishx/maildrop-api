const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const path = require('path');

const maildrop = require(path.join(__dirname, '..', 'src', 'maildrop'));

chai.use(chaiAsPromised);
chai.should();

const mailBox = 'john';

describe('suggestion()', () => {
  it('should return without error', () => {
    return maildrop.suggestion().should.eventually.be.fulfilled;
  });
});

describe('blocked()', () => {
  it('should return without error', () => {
    return maildrop.blocked().should.eventually.be.fulfilled;
  });
});

describe('getInbox(mailBox)', () => {
  it('should be fulfilled without error', () => {
    return maildrop.getInbox(mailBox).should.eventually.be.fulfilled;
  });
});

describe('getInbox()', () => {
  it('should be rejected with error', () => {
    return maildrop.getInbox().should.eventually.be.rejected;
  });
});

describe('getEmail(mailBox, mailBox)', () => {
  it('should be fulfilled without error', () => {
    return maildrop.getEmail(mailBox, mailBox).should.eventually.be.fulfilled;
  });
});

describe('getEmail()', () => {
  it('should be rejected with error', () => {
    return maildrop.getEmail().should.eventually.be.rejected;
  });
});

describe('deleteEmail(mailBox, mailBox)', () => {
  it('should be fulfilled without error', () => {
    return maildrop.deleteEmail(mailBox, mailBox).should.eventually.be.fulfilled;
  });
});

describe('deleteEmail()', () => {
  it('should be rejected with error', () => {
    return maildrop.deleteEmail().should.eventually.be.rejected;
  });
});
