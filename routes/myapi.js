'use strict'
module.exports = [
  {
    prefix: '/my-api',
    pin: 'role:api,cmd:*',
    map: {
      bazinga: {
        GET: true
      }
    }
  },
  {
    prefix: '/employee',
    pin: 'role:employee,cmd:*',
    map: {
      add: {
        GET: true
      },
      list: {
        GET: true
      },
    }
  }
];