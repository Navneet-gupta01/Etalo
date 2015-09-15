/**
 * Created by navneet_gupta on 14/09/15.
 */
'use strict';

// Setting up route
angular.module('etalo').config(['$routeProvider',
	function($routeProvider) {

		$routeProvider.otherwise('/');

		// Users state routing
		$routeProvider.when('/outlets', {
			templateUrl: 'modules/etalo/views/outlets.client.view.html',
			controller: 'OutletController'
		}).when('/menus', {
			templateUrl : 'modules/etalo/views/menus.client.view.html',
			controller: 'MenusController'
		});
	}
]);
