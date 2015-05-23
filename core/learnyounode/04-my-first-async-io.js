var fs = require('fs');

// define file in a var so you could reuse the function with other stuff
var file = process.argv[2];

fs.readFile(file, function(err, fileContents){
  if(err) {
    console.log("Kapott!");
  }
  else {
    var lines = fileContents.toString().split('\n').length - 1;
    console.log(lines);
  }

});
