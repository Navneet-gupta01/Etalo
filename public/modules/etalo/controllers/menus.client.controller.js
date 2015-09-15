/**
 * Created by navneet_gupta on 14/09/15.
 */
'use strict';

angular.module('etalo').controller('MenusController', ['$scope','$routeParams','$window',
	function($scope,$routeParams,$window) {
		$scope.menus = [
			{
				img:'/modules/etalo/img/image1.jpg',
				name:'Aloo Chana Chat1',
				price:'50',
				noOfItemsSelected:0,
				maxItems : 6,
				details:' Chatpata and lip-smacking Aloo Chana Chaat with chopped boiled Potatoes & Onions, Chickpeas, Papdi and Chaat Masala.'
			},{
				img:'/modules/etalo/img/image2.jpg',
				name:'Kadhai Paneer1',
				price:'50',
				noOfItemsSelected:0,
				maxItems : 6,
				details:' Chatpata and lip-smacking Aloo Chana Chaat with chopped boiled Potatoes & Onions, Chickpeas, Papdi and Chaat Masala.'
			},{
				img:'/modules/etalo/img/image1.jpg',
				name:'Aloo Chana Chat2',
				price:'50',
				noOfItemsSelected:0,
				maxItems : 6,
				details:' Chatpata and lip-smacking Aloo Chana Chaat with chopped boiled Potatoes & Onions, Chickpeas, Papdi and Chaat Masala.'
			},{
				img:'/modules/etalo/img/image2.jpg',
				name:'Kadhai Paneer2',
				price:'50',
				noOfItemsSelected:0,
				maxItems : 6,
				details:' Chatpata and lip-smacking Aloo Chana Chaat with chopped boiled Potatoes & Onions, Chickpeas, Papdi and Chaat Masala.'
			},{
				img:'/modules/etalo/img/image1.jpg',
				name:'Aloo Chana Chat3',
				price:'50',
				noOfItemsSelected:0,
				maxItems : 6,
				details:' Chatpata and lip-smacking Aloo Chana Chaat with chopped boiled Potatoes & Onions, Chickpeas, Papdi and Chaat Masala.'
			},{
				img:'/modules/etalo/img/image2.jpg',
				name:'Kadhai Paneer3',
				price:'50',
				noOfItemsSelected:0,
				maxItems : 6,
				details:' Chatpata and lip-smacking Aloo Chana Chaat with chopped boiled Potatoes & Onions, Chickpeas, Papdi and Chaat Masala.'
			},{
				img:'/modules/etalo/img/image1.jpg',
				name:'Aloo Chana Chat4',
				price:'50',
				noOfItemsSelected:0,
				maxItems :6,
				details:' Chatpata and lip-smacking Aloo Chana Chaat with chopped boiled Potatoes & Onions, Chickpeas, Papdi and Chaat Masala.'
			},{
				img:'/modules/etalo/img/image2.jpg',
				name:'Kadhai Paneer4',
				price:'50',
				noOfItemsSelected:0,
				maxItems : 6,
				details:' Chatpata and lip-smacking Aloo Chana Chaat with chopped boiled Potatoes & Onions, Chickpeas, Papdi and Chaat Masala.'
			},{
				img:'/modules/etalo/img/image1.jpg',
				name:'Aloo Chana Chat5',
				price:'50',
				noOfItemsSelected:0,
				maxItems : 6,
				details:' Chatpata and lip-smacking Aloo Chana Chaat with chopped boiled Potatoes & Onions, Chickpeas, Papdi and Chaat Masala.'
			}]; 

			$scope.cart={};
			if(localStorage.getItem('outlet') !== null) {
				$('.outlet_selected').text(localStorage.getItem('outlet'));
				$('.outlet').css('display', 'block');
			} else {
				$window.location.href = '/#!/outles';
			}
			$scope.incrementItemToCart = function(menu) {
				menu.noOfItemsSelected ++;
				console.log('Inside Increment block   noofITems ==' + menu.noOfItemsSelected );
				if($scope.cart.hasOwnProperty(menu.name)) {
					$scope.cart[menu.name].noOfItems  = menu.noOfItemsSelected;
				} else {
					$scope.cart[menu.name] = {noOfItems:menu.noOfItemsSelected,priceEach:menu.price};
				}
			};
			$scope.decrementItemFromCart = function(menu) {
				menu.noOfItemsSelected --;
				console.log('Inside Decrement block   noofITems ==' + menu.noOfItemsSelected );
				if($scope.cart.hasOwnProperty(menu.name)) {
					if(menu.noOfItemsSelected ===0) {
						delete $scope.cart[menu.name];
					} else {
						$scope.cart[menu.name].noOfItems  = menu.noOfItemsSelected;
					}
				} else {
					$scope.cart[menu.name] = {noOfItems:menu.noOfItemsSelected,priceEach:menu.price};
				}
			};
			
			$scope.resetCart = function() {
				console.log(JSON.stringify($scope.cart));
				for(var property in $scope.cart){
					if($scope.cart.hasOwnProperty(property)) {
						$scope.menus.forEach(function(menu) {
							menu.noOfItemsSelected=0;
						});
						delete $scope.cart[property];
					}
				}
			};
		
	}

]);