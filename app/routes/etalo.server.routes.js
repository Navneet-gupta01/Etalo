/**
 * Created by navneet_gupta on 15/09/15.
 */
'use strict';

module.exports = function(app) {
    var outlets = require('../../app/controllers/outlet.server.controller');
    var menus = require('../../app/controllers/menus.server.controller');
   
    app.route('/outlets').get(outlets.list);
    app.route('/menus').get(menus.list);
    app.route('/getCartValue').post(menus.getCartValue);
};
