//get module 
var mymodule = require('./mymodule.js');
//get the parameter from commandline
var dir = process.argv[2];
var extension = process.argv[3];

mymodule(dir,extension,function(err,result){
	if(err){
		console.log("error:"+err.toString());
	}else{
 		for(var j=0;j<result.length;j++){
			console.log(result[j]);
		}      

	}

});


