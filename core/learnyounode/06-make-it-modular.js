var mymodule = require('./mymodule');

var dir = process.argv[2];
var fileType = process.argv[3];

var callback = function(err, data){
  if(err){
    console.log("Kapott");
  }
  else {
    data.forEach(function (item) {
      console.log(item);
    });
  }
}

mymodule(dir, fileType, callback);
