'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$window',
	function($scope,$window) {
		$scope.isCollapsed = false;

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$routeChangeSuccess', function() {
			$scope.isCollapsed = false;
		});
		
		if(localStorage.getItem('outlet') !== null) {
			$scope.outlet = localStorage.getItem('outlet');
		} else {
			$scope.outlet = '';
		}
		$scope.change_outlet = function() {
			$window.location.href = '/#!/outlets';
			$('.outlet').css('display', 'none');
		};
	}
]);
