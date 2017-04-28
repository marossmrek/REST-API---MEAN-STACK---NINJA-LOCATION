const express = require('express');
const router  = express.Router();
const Ninja   = require('../models/ninjas.js');


//get a list of ninjas from db
router.get('/ninjas', function(req, res, next){
	Ninja.geoNear(
		{type:"Point", coordinates:[parseFloat(req.query.lng), parseFloat(req.query.lat)]},
		{maxDistance:1000000, spherical:true}
	).then(function(ninjas){
		res.send(ninjas);
	});
}); 

//post a ninja to db
router.post('/ninjas', function(req, res, next){
	Ninja.create(req.body).then(function(ninja){
		res.send(ninja);
	}).catch(next);	
}); 

//updating ninja in db
router.put('/ninjas/:id', function(req, res, next){
	Ninja.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
		Ninja.findOne({_id:req.params.id}).then(function(ninja){
			res.send(ninja);
		});
	});
}); 

//remove ninja from db
router.delete('/ninjas/:id', function(req, res, next){
	Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
		res.send(ninja)
	});
}); 

module.exports = router;