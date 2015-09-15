/**
 * Created by navneet_gupta on 14/09/15.
 */
'use strict';

angular.module('etalo').controller('OutletController', ['$scope','$routeParams','$window',
	function($scope,$routeParams,$window) {
		// This provides Authentication context.
		$scope.getOutlets = function() {
			$scope.outlets = ['Bellandur','HSR Layout','Indiranagar','BTM Layout','AKR Tech Park','Sarjapur Road','Domlur',
			'Koramangala','Outer Ring Road - Kadubeesanahalli','MG Road','Bannerghatta Road','Old Airport Road - Kodihalli',
			'ITPL - Brookefield','Bagmane Tech Park - C.V. Raman Nagar','Electronic City'];
		};
		$scope.getMenu = function(outlet) {
			localStorage.setItem('outlet', outlet);
			$window.location.href = '/#!/menus';
		};
	}

]);
