var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var content = buffer.toString();
var array_content = content.split("");


var array_filtered=array_content.filter(function(data){
	return data == '\n';
})

//console.log(array_filtered);
var sum=0;

	//console.log(array_filtered.length);
/*for(var i=1;i<=array_filtered.length;i++){
	//console.log(i);
	sum += i;
}*/


console.log(array_filtered.length);
