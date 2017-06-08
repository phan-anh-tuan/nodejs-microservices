var seneca = require('seneca')();

seneca.add({cmd: 'salestax'}, function(args,callback){
			var total = args.net * 1.23;
			callback(null, { total: total});
		});

seneca.act({cmd: 'salestax', net: 100}, function (err, result) {
  if (err) return console.error(err)
  console.log(result.total)
})
