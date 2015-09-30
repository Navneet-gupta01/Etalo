'use strict';

angular.module('core').controller('FooterController', ['$scope','$location',
    function($scope,$location) {
        var date = new Date();
        $scope.isCollapsed2 = false;
        $scope.sections = [{name:'Choose Location',route:'/outlets'},{name:'Choose Dishes',route:'/menus'},
        {name:'Place Order',route:'/cart'},{name:'Order History',route:'/history'},
        {name:'Contact Us',route:'/contactUs'},{name:'About Us',route:'/aboutUs'}];
        function getActivePage() {
			$scope.sections.forEach(function(section){
				if(section.route === $location.path())
					$scope.selected = section;
			});
		}
        $scope.currentYear = date.getFullYear();
        $scope.section_active = $location.path();
        getActivePage();
        $scope.toggleCollapsibleMenu2 = function() {
			$scope.isCollapsed2 = !$scope.isCollapsed2;
		};
		$scope.$on('$routeChangeSuccess', function() {
			$scope.isCollapsed2 = false;
			$scope.section_active = $location.path();
			getActivePage();
		});
    }
]);

