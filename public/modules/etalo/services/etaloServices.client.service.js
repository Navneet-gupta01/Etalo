/**
 * Created by navneet_gupta on 14/09/15.
 */
'use strict';

angular.module('etalo').factory('OutletsService', ['$resource', function($resource){
    var resource = $resource('/outlets', {}, {
        query: {
            method: 'GET',
            isArray: true
        }
        });
    return resource;
}]);
angular.module('etalo').factory('MenusService', ['$resource', function($resource){
    var resource = $resource('/menus?outlet=:outlet', {}, {
        query: {
            method: 'GET',
            isArray: true
        }
        });
    return resource;
}]);
