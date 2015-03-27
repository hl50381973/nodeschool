var BufferList  = require('bl');
var http = require('http');

http = http.get(process.argv[2],function(res){
	res.setEncoding('utf8');


	//var result =[];
	res.pipe( BufferList (function(err,data){
		 
	    if(err){
			console.log('err in the bl:'+err);
		}else{
			console.log(data.length);
			console.log(data.toString());
		}

	}));


});