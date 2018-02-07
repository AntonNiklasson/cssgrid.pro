const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.get('/', (req, res) => {
  const rootPath = path.resolve(__dirname, '../../public');
  return res.sendFile('index.html', { root: rootPath });
});

app.listen(4000, () => {
  console.log('Listening on port 4000...');
});
