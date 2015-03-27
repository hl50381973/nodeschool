module.exports = function(path,ext_name,callback){
	var fs = require('fs');
	fs.readdir(path,function(err,data){
		if(err){
			callback(err);
		}else{
			var result = data.filter(function(file_name){
				var i =	file_name.indexOf(".")
				if(i>0){
					var last_name = file_name.substr(i+1);

					return last_name == process.argv[3];
				}
			});
			//console.log(result);
			callback(null,result);
		}

	});


}



