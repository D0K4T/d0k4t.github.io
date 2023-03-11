const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const { emailEndpoint } = require('./emailEndpoint'); // Change import statement
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Define the route for the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Define the route for the sendMail.js code
app.use('/emailEndpoint.js', express.static(path.join(__dirname, 'emailEndpoint.js')));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});