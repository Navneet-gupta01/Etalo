'use strict';

var _ = require('lodash'),

	mongoose = require('mongoose'),
	passport = require('passport');


exports.index = function(req, res) {
	res.render('index', {
		request: req
	});
};
