var fs = require('fs');
var content;
var content_splitted;
var sum=0;
var array_filtered;


fs.readFile(process.argv[2],function(err,data){
	if(err){
		console.log(err.toString())
	}else{
		content = data.toString();
		content_splitted = content.split("");
		array_filtered   = content_splitted.filter(function(data){
								return data == '\n';
							});
		console.log(array_filtered.length);
	}
});









