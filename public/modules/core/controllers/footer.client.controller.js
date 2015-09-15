'use strict';

angular.module('core').controller('FooterController', ['$scope',
    function($scope) {
        var date = new Date();
        $scope.isCollapsed2 = false;
        $scope.currentYear = date.getFullYear();
        $scope.toggleCollapsibleMenu2 = function() {
			$scope.isCollapsed2 = !$scope.isCollapsed2;
		};
        $scope.sections = ['Choose Location','Choose Dishes','Place Order','Order History','Contact Us','About Us'];
    }
]);

