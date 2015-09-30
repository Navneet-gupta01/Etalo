/**
 * Created by navneet_gupta on 14/09/15.
 */
'use strict';

angular.module('etalo').controller('OutletController', ['$scope','$routeParams','$window','OutletsService',
	function($scope,$routeParams,$window,OutletsService) {
		// This provides Authentication context.
		$scope.getOutlets = function() {
			var outlets = OutletsService.query({},function(){
				$scope.outlets = outlets.outlet;
			});
		};
		$scope.getMenu = function(outlet) {
			localStorage.setItem('outlet', outlet);
			$window.location.href = '/#!/menus';
		};
	}

]);
