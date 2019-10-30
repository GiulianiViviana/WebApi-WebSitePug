const express = require('express');
const path = require('path');
const http = require('http');
const app= express();

var cors = require('cors'); 

app.use(cors()); 
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api', (req, res) => {
  res.send('api works');
});


app.get('*', (req, res) => {
   res.send('app works!');  
   //res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port,  () => {console.log('Example app listening on port 3000!');});
