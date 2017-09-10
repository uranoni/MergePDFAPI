
const express = require('express');
var app = express();
app.use(express.static('./'));
const PDFMerge = require('pdf-merge');

app.get('/merge',(req,res)=>{
  const files = [ '1.pdf','2.pdf'];

  PDFMerge(files, {output: `${__dirname}/3.pdf`})
  .then((buffer) => {
      res.send('OK');
  });
})

app.listen(3000);
