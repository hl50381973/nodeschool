var fs = require('fs');

fs.readdir(process.argv[2],function(err,list){
	if(err){
		console.log("err:"+err.toString());
	}else{

		var result=list.filter(function(file_name){
			
			var i =	file_name.indexOf(".")
			if(i>0){
				var last_name = file_name.substr(i+1);

				return last_name == process.argv[3];
			}
			

		});


		for(var j=0;j<result.length;j++){
			console.log(result[j]);
		}
		
	}


});