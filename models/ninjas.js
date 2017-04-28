const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;


//geo shcema of ninjas
const GeoSchema = new Schema({

	type: {
		type:String,
		default:"Point"
	},

	coordinates: {
		type: [Number],
		index:"2dsphere"
	}
});

// ninjas schema and models
const NinjaSchema = new Schema({

	name: {
		type: String,
		required : [true, 'The filed of name is required']
	},

	rank: {
		type:String
	},

	available : {
		type: Boolean,
		default: false
	},

	geometry: GeoSchema
}); 

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;