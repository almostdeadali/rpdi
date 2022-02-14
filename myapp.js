const express = require('express');
const myapp = express();
const port = 3000;

myapp.get('/', (req, res) => {
  res.send('ssssssstgfrbhrthbr');
});


myapp.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});