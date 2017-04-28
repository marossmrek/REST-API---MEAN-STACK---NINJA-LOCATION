const express    = require('express');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose'); 

//set up our express app
const app = express();

//set up body parser middlewear
app.use(bodyParser.json());

//use our router api
app.use('/api',require('./routes/api.js'));

//error handling middlewear
app.use(function(err, req, res, next){
	res.status(422).send({error:err.message});
});

//connect to MongoDB
mongoose.connect('mongodb://localhost/ninjaHero');
mongoose.Promise = global.Promise;

app.listen(process.env.port || 4200, function(){
	console.log("Now i listen to port number 4200");
});