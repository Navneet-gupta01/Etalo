/**
 * Created by navneet_gupta on 15/09/15.
 */
'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Outlets = mongoose.model('Outlets');

exports.list =  function(req, res) {
    Outlets.find({}, function(err, outlets) {
        if (err) {
            return res.send(err);
        }
        res.json(outlets);
    });
};