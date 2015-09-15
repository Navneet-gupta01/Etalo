/**
 * Created by navneet_gupta on 15/09/15.
 */
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var validateLocalStrategyProperty = function(property) {
    return ((this.provider !== 'local' && !this.updated) || property.length);
};

var MenusSchema = new Schema({
    _id: String,
    outletName : {
	        type: String,
	        trim: true,
	        default: '',
	        validate: [validateLocalStrategyProperty, 'Please fill outlet name']
	},
    product:[{
	    img : {type: String, required: false},
	    name : {type: String, required: true},
	    price : {type: String, required: true},
	    details : {type: String, required: false},
	    maxItems : {type: String, required: true}
	}]
});

mongoose.model('Menus', MenusSchema);