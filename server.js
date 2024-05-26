const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api/webhook-listener', (req, res) => {
  const data = req.body;
  addProduct(data);
  res.status(200).send('Received');
});

function addProduct(data) {
  console.log('Adding product to database: ', data);
}

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});
