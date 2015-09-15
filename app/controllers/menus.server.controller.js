/**
 * Created by navneet_gupta on 15/09/15.
 */
'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Menus = mongoose.model('Menus');

exports.list =  function(req, res) {
	var outletName = new RegExp(req.query.outlet, 'i');
    Menus.find({_id:outletName}, function(err, movies) {
        if (err) {
            return res.send(err);
        }
        res.json(movies);
    });
};
exports.createWithoutDuplicate = function(req, res) {
    var menus = new Menus(req.body);
    Menus.update({_id:req.body.outletName, outletName:req.body.outletName}, menus,
        {upsert:true},function(err) {
        if (err) {
            return res.send(err);
        } else {
            res.json(menus);
        }
    });
};