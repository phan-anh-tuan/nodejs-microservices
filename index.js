/*
function english(options) {
    
    this.add({role:'english', cmd: 'print'}, function(args, res) {
        console.log('math options: ' + JSON.stringify(this.options().math));    
        res({ answer: 'DONE'});
    })
}

function math(options) {
    //options = this.util.deepextend({});
    this.options(options);
    var connected = false;
    this.add({ role:'math', cmd:'sum'},function(msg, callback) {
        result = msg.left + msg.right;
        callback(null,{answer: result});
    });
    
    this.add({ role: 'math', cmd:'product'},function(msg, callback){
        result = options.base * msg.left * msg.right;
        callback(null,{answer: result, 'dbconnected': connected});
    });
    
    this.add({init:'math'},function(args, done) {
        setTimeout(function(){
            console.log('connected to database, connection string ' + options.url);
            connected = true;
            done();
        }, 1000);
    });
    return 'math';
}

require('seneca')().use(math,{base: 10, url:'mongodb://localhost:27017/localdb'})
                    .use(english)
                    .act({role:'english', cmd:'print'}, function(err, result) { 
                                if (err) {
                                    console.error(err);
                                }
                                console.log(result);
                                });
*/




var Seneca = require('seneca');
var Express = require('express');
var Web = require('./web.js');
var api = require('./plugins/api.js');
var employees_plugin = require('./plugins/employees_api.js');
var Routes = require('./routes/myapi.js');
var config = {
  routes: Routes,
  adapter: require('seneca-web-adapter-express'),
  context: Express()
};

var seneca = Seneca()
 /* .use('entity')
  .use('mongo-store', {
                uri: 'mongodb://127.0.0.1:27017/microservices'
        })*/
  .use(api)
  .use(employees_plugin)
  .use(Web, config)
  .ready(() => {
    var server = seneca.export('web/context')()

    server.listen('3000', () => {
      console.log('server started on: 3000')
    })
  })

