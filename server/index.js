const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.use('/', homeValueRoutes);

app.listen(3009, function() {
    console.log('listening on port 3009');
});