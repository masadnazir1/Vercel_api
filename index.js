// index.js
const express = require('express')
const app = express()
const PORT = 4000



const products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 19.99 },
  { id: 3, name: 'Product 3', price: 5.99 },
];

const person = [

{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'},
{First_Name : 'Muhammad asad Nazir', Last_name: 'Azad', age: '20'}

];

app.get('/products', (req, res) => {
  res.json(products);
})



app.get('/person', (req, res) => {
  res.json(person);
})



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app