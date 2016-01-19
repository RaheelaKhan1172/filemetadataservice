var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var path = require('path');

/*app.get('/',function(req,res) {
   res.send('<form method="post" enctype="multipart/form-data">'
    + '<p>Choose File: <input type="file" name="fileUpload" /></p>'
    + '<p><input type="submit" value="Upload" /></p>'
    + '</form>');
});*/

app.use(express.static(path.join(__dirname,'/html')));

app.post('/', upload.single('file'),function(req,res) {
  res.setHeader('content-type','application/json');
  console.log(req.file,req.file.size)

  res.send({size:req.file.size});
});

app.listen(3030);
