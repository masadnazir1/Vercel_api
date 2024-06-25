// index.js
const express = require('express')
const app = express()
const PORT = 4000



const products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 19.99 },
  { id: 3, name: 'Product 3', price: 5.99 },
];



app.get('/products', (req, res) => {
  res.json(products);
})


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app