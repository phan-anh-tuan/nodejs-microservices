'use strict'
module.exports = function(options) {
    var seneca = this;
    var id;
    seneca.add({init:'employees_api'}, function(args,done){
        /*var entities = require('seneca-entity');
        seneca.use('entity');*/
        seneca.use('mongo-store', {
                uri: 'mongodb://127.0.0.1:27017/microservices'
        });
        console.log('employees_api plugin initialised ... DONE');
        done();
    });
    seneca.add({role: 'employee', cmd: 'add'},function(args, cb){
        var employee = {
            name: "David",
            surname: "Gonzalez",
            position: "Software Developer"
        };
        seneca.make('employee').data$(employee).save$(function(err,result){
            if (err) { console.error(err); }
            else {
                id = result.id;
                console.log(result);
            }
        }); 
        cb(null, { result:'OK'});
    });
    
    seneca.add({role: 'employee', cmd: 'list'},function(args, cb){
        //console.log(args);
        seneca.make('employee').list$(function(err,results) {
            cb(null, { result:results});
        });
        
    });
     
    return 'employees_api';
}