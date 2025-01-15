const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes')
const cors = require("cors");
const path = require('path');


const app = express()
const port = process.env.PORT || 8000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'view')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

app.use('/api', todoRoutes)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})