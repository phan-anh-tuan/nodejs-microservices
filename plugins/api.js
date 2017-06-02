'use strict'
module.exports = function api() {
    var seneca = this;
    seneca.add('role:api,cmd:bazinga',function(args,done){ done(null,{bar:"Bazinga!"});});
};