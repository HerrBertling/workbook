var http = require('http');
var bl = require('bl');

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var count = 0;
var responses = [];

var getContent = function(url, index){
  http.get(url, function (response){
    response.pipe(bl(function (err, data){
      if(err) {
        responses[index] = err;
      }
      data = data.toString();
      responses[index] = data;
      count++
      if (count == 3) {
        responses.forEach(function(text){
          console.log(text);
        });
      }
    }));
  });
};

urls.forEach(function(url, index) {
  getContent(url, index);
});
