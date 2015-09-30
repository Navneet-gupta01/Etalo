/**
 * Created by navneet_gupta on 15/09/15.
 */
'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Outlets = mongoose.model('Outlets');

var outlets = ['Bellandur','HSR Layout','Indiranagar','BTM Layout','AKR Tech Park','Sarjapur Road','Domlur',
			'Koramangala','Outer Ring Road - Kadubeesanahalli','MG Road','Bannerghatta Road','Old Airport Road - Kodihalli',
			'ITPL - Brookefield','Bagmane Tech Park - C.V. Raman Nagar','Electronic City'];
exports.list =  function(req, res) {
    // Outlets.find({}, function(err, outlets) {
    //     if (err) {
    //         return res.send(err);
    //     }
    //     res.json({outlets});
    // });
    res.json({outlet:outlets});
};