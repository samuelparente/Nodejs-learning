//Samuel Parente
//NODE JS
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload' && req.method.toLowerCase() == 'post') {
    var form = new formidable.IncomingForm();
    
    form.parse(req, function (err, fields, files) {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.write('Internal Server Error');
        return res.end();
      }

	  // Log files object to check if it contains the expected file
      console.log('Files Object:', files);
	  
      // Check if files object is empty or missing filetoupload
      if (!files.filetoupload) {
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.write('No file uploaded');
        return res.end();
      }
	  else{
		  console.log("There is one file!");
	  }

      var oldpath = files.filetoupload[0].filepath;
	  
      var newpath = './uploads/' + files.filetoupload[0].originalFilename;

	
		console.log("the new path is: " + newpath);
		
      fs.rename(oldpath, newpath, function (err) {
        if (err) {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.write('Error uploading file');
          return res.end();
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('File uploaded with success!');
        res.end();
      });
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    res.end();
  }
}).listen(8080);
