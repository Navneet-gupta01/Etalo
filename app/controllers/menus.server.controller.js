/**
 * Created by navneet_gupta on 15/09/15.
 */
'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Menus = mongoose.model('Menus');
var itemObj = {};

var menus = [
            {
                img:'/modules/etalo/img/image1.jpg',
                name:'Aloo Chana Chat1',
                price:50,
                noOfItemsSelected:0,
                maxItems : 6,
                category: 'veg',
                details:' Chatpata and lip-smacking Aloo Chana Chaat with chopped boiled Potatoes & Onions, Chickpeas, Papdi and Chaat Masala.'
            },{
                img:'/modules/etalo/img/image2.jpg',
                name:'Kadhai Paneer1',
                price:50,
                noOfItemsSelected:0,
                maxItems : 6,
                category: 'non-veg',
                details:' Chatpata and lip-smacking Aloo Chana Chaat with chopped boiled Potatoes & Onions, Chickpeas, Papdi and Chaat Masala.'
            },{
                img:'/modules/etalo/img/image1.jpg',
                name:'Aloo Chana Chat2',
                price:50,
                noOfItemsSelected:0,
                maxItems : 6,
                category: 'veg',
                details:' Chatpata and lip-smacking Aloo Chana Chaat with chopped boiled Potatoes & Onions, Chickpeas, Papdi and Chaat Masala.'
            },{
                img:'/modules/etalo/img/image2.jpg',
                name:'Kadhai Paneer2',
                price:50,
                noOfItemsSelected:0,
                maxItems : 6,
                category: 'veg',
                details:' Chatpata and lip-smacking Aloo Chana Chaat with chopped boiled Potatoes & Onions, Chickpeas, Papdi and Chaat Masala.'
            },{
                img:'/modules/etalo/img/image1.jpg',
                name:'Aloo Chana Chat3',
                price:50,
                noOfItemsSelected:0,
                maxItems : 6,
                category: 'non-veg',
                details:' Chatpata and lip-smacking Aloo Chana Chaat with chopped boiled Potatoes & Onions, Chickpeas, Papdi and Chaat Masala.'
            },{
                img:'/modules/etalo/img/image2.jpg',
                name:'Kadhai Paneer3',
                price:50,
                noOfItemsSelected:0,
                maxItems : 6,
                category: 'veg',
                details:' Chatpata and lip-smacking Aloo Chana Chaat with chopped boiled Potatoes & Onions, Chickpeas, Papdi and Chaat Masala.'
            },{
                img:'/modules/etalo/img/image1.jpg',
                name:'Aloo Chana Chat4',
                price:50,
                noOfItemsSelected:0,
                maxItems :6,
                category: 'veg',
                details:' Chatpata and lip-smacking Aloo Chana Chaat with chopped boiled Potatoes & Onions, Chickpeas, Papdi and Chaat Masala.'
            },{
                img:'/modules/etalo/img/image2.jpg',
                name:'Kadhai Paneer4',
                price:50,
                noOfItemsSelected:0,
                maxItems : 6,
                category: 'non-veg',
                details:' Chatpata and lip-smacking Aloo Chana Chaat with chopped boiled Potatoes & Onions, Chickpeas, Papdi and Chaat Masala.'
            },{
                img:'/modules/etalo/img/image1.jpg',
                name:'Aloo Chana Chat5',
                price:50,
                noOfItemsSelected:0,
                maxItems : 6,
                category: 'non-veg',
                details:' Chatpata and lip-smacking Aloo Chana Chaat with chopped boiled Potatoes & Onions, Chickpeas, Papdi and Chaat Masala.'
            }];

function storeItemObj(menus){
    menus.forEach(function(menu){
        itemObj[menu.name] = menu.price;
    });
}

exports.list =  function(req, res) {
 // var outletName = new RegExp(req.query.outlet, 'i');
 //    Menus.find({_id:outletName}, function(err, movies) {
 //        if (err) {
 //            return res.send(err);
 //        }
 //        res.json(movies);
 //    });
  storeItemObj(menus);
  res.json({menu:menus});
};
exports.getCartValue = function(req,res) {
    var itemsInCart = req.body.cart;
    console.log(JSON.stringify(itemsInCart));
    var totalCost = 0;
    var cart = {};
    for( var key in itemsInCart){
        if(itemObj.hasOwnProperty(key)){
            cart[key] = {noOfItems : itemsInCart[key].noOfItems,priceEach:itemObj[key]};
            totalCost = totalCost + itemObj[key] * itemsInCart[key].noOfItems;
        }
    }
    res.json({cart:cart,cost:totalCost});
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