var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var fileType = process.argv[3];

fs.readdir(dir, function(err, dirFiles){
  dirFiles.forEach(function(file){
    if(path.extname(file) === '.' + fileType) {
      console.log(file);
    }
  })
});
