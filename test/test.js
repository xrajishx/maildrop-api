const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const path = require('path');

const maildrop = require(path.join(__dirname, '..', 'src', 'maildrop'));

chai.use(chaiAsPromised);
chai.should();

const mailBox = 'f';

describe('suggestion()', function() {
  it('should return without error', function() {
    return maildrop.suggestion().should.eventually.be.fulfilled;
  });
});

describe('blocked()', function() {
  it('should return without error', function() {
    return maildrop.blocked().should.eventually.be.fulfilled;
  });
});

describe('getInbox(mailBox)', function() {
  it('should be fulfilled without error', function() {
    return maildrop.getInbox(mailBox).should.eventually.be.fulfilled;
  });
});

describe('getInbox()', function() {
  it('should be rejected with error', function() {
    return maildrop.getInbox().should.eventually.be.rejected;
  });
});

describe('getEmail(mailBox, mailBox)', function() {
  it('should be fulfilled without error', function() {
    return maildrop.getEmail(mailBox, mailBox).should.eventually.be.fulfilled;
  });
});

describe('getEmail()', function() {
  it('should be rejected with error', function() {
    return maildrop.getEmail().should.eventually.be.rejected;
  });
});

describe('deleteEmail(mailBox, mailBox)', function() {
  it('should be fulfilled without error', function() {
    return maildrop.deleteEmail(mailBox, mailBox).should.eventually.be.fulfilled;
  });
});

describe('deleteEmail()', function() {
  it('should be rejected with error', function() {
    return maildrop.deleteEmail().should.eventually.be.rejected;
  });
});
