'use strict';

// Setting up route
angular.module('core').config(['$routeProvider',
	function($routeProvider) {

		$routeProvider.otherwise('/');
	}
]);
