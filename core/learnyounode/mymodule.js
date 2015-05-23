var fs = require('fs');
var path = require('path');

module.exports = function(directoryName, filenameExtension, myCallback) {

  fs.readdir(directoryName, function(err, dirFiles){
    if(err) {
      return myCallback(err);
    }
      var filteredFiles = dirFiles.filter(function(file){
        return path.extname(file) === '.' + filenameExtension;
      });

    return myCallback(null, filteredFiles);
  });
}
