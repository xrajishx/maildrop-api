# maildrop-api
Wrapper module around [maildrop.cc](http://maildrop.cc) API.
### Installation
```bash
npm install maildrop-api
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
$ npm install
```
Test:
```bash
$ npm test
```
