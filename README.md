# maildrop-api
Wrapper module around [maildrop.cc](http://maildrop.cc) API.

[![npm](https://img.shields.io/npm/v/maildrop-api.svg)](https://www.npmjs.com/package/maildrop-api)
[![Travis](https://img.shields.io/travis/xrajishx/maildrop-api.svg)](https://travis-ci.org/xrajishx/maildrop-api)
[![Coverage Status](https://coveralls.io/repos/github/xrajishx/maildrop-api/badge.svg)](https://coveralls.io/github/xrajishx/maildrop-api)
[![dependencies Status](https://david-dm.org/xrajishx/maildrop-api/status.svg)](https://david-dm.org/xrajishx/maildrop-api)
[![devDependencies Status](https://david-dm.org/xrajishx/maildrop-api/dev-status.svg)](https://david-dm.org/xrajishx/maildrop-api?type=dev)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/xrajishx/maildrop-api/master/LICENSE)

### Installation

```bash
yarn add maildrop-api
```
### Usage
```javascript
const maildrop = require('maildrop-api');

const mailBox = 'john';
const emailId = 'ehFA9k';

// Get inbox
maildrop.getInbox(mailBox).then(emails => {
  console.log(emails);
});

// Get email
maildrop.getEmail(mailBox, emailId).then(email => {
  console.log(email);
});

// Delete email
maildrop.deleteEmail(mailBox, emailId).then(result => {
  console.log(result);
});

// Suggestion API
maildrop.suggestion().then(suggestion => {
  console.log(suggestion);
});

// Blocked API
maildrop.blocked().then(blocked => {
  console.log(blocked);
});
```
### Development
Clone the project and install dependencies:
```bash
$ git clone https://github.com/xrajishx/maildrop-api.git
$ cd maildrop-api
$ yarn
```
### Test
```bash
$ yarn test
```
