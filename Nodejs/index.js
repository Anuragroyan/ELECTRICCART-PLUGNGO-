const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {mongoose} = require('./db.js');
var cartController = require('./controllers/cartController.js');
var feedbackController = require('./controllers/feedbackController.js');
var postsController = require('./controllers/postsController.js');
var videoController = require('./controllers/videoController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/register', cartController);
app.use('/feedback',feedbackController);
app.use('/posts',postsController);
app.use('/videos',videoController);
