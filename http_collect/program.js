var BufferList  = require('bl');
var http = require('http');

http = http.get(process.argv[2],function(res){
	res.setEncoding('utf8');
	var bl = new BufferList();


res.on('data',function(data){
		bl.append(data);

	});

	res.on('end',function(end){
		var result = bl.toString();
		console.log(result.length);
		console.log(result);
	
	});


});