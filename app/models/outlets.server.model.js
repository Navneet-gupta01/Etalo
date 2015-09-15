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

var OutletsSchema = new Schema({
    _id: String,
    outlets:[{
	    outletName : {
	        type: String,
	        trim: true,
	        default: '',
	        validate: [validateLocalStrategyProperty, 'Please fill outlet name']
	    }
	}]
});

mongoose.model('Outlets', OutletsSchema);