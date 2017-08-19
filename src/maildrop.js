const request = require('request');
var exports = module.exports = {};

const baseUrl = process.env.MAILDROP_URL || 'https://maildrop.cc';

exports.suggestion = () => {
  return new Promise((resolve, reject) => {
    let options = {
      method: 'GET',
      url: baseUrl + '/api/suggestion',
      json: true,
      headers: { 'cache-control': 'no-cache' }
    };

    request(options, (error, response, body) => {
      if(error) return reject(error);
      return resolve(body.suggestion);
    });
  });
};

exports.blocked = () => {
  return new Promise((resolve, reject) => {
    let options = {
      method: 'GET',
      url: baseUrl + '/api/blocked',
      json: true,
      headers: { 'cache-control': 'no-cache' }
    };

    request(options, (error, response, body) => {
      if(error) return reject(error);
      return resolve(body.blocked);
    });
  });
};

exports.getInbox = (mailBox) =>  {
  return new Promise((resolve, reject) => {
    if(!mailBox) return reject(new Error('mailBox required.'));

    let options = {
      method: 'GET',
      url: baseUrl + '/api/inbox/' + mailBox,
      json: true,
      headers: { 'cache-control': 'no-cache' }
    };

    request(options, (error, response, body) => {
      if(error) return reject(error);
      return resolve(body);
    });
  });
};

exports.getEmail = (mailBox, emailId) => {
  return new Promise((resolve, reject) => {
    if(!(mailBox && emailId)) return reject(new Error('mailBox required.'));

    let options = {
      method: 'GET',
      url: baseUrl + '/api/inbox/' + mailBox + '/' + emailId,
      json: true,
      headers: { 'cache-control': 'no-cache' }
    };

    request(options, (error, response, body) => {
      if(error) return reject(error);
      return resolve(body);
    });
  });
};

exports.deleteEmail = (mailBox, emailId) => {
  return new Promise((resolve, reject) => {
    if(!(mailBox && emailId)) return reject(
      new Error('mailBox and emailId required.')
    );

    let options = {
      method: 'DELETE',
      url: baseUrl + '/api/inbox/' + mailBox + '/' + emailId,
      json: true,
      headers: { 'cache-control': 'no-cache' },
      followRedirect: true
    };

    request(options, (error, response, body) => {
      if(error) return reject(error);
      return resolve(body);
    });
  });
};
