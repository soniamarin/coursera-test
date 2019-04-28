(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    // var config = {};
    // if (category) {
    //   config.params = {'short_name': category +".json"};
    // }

    return $http.get(ApiPath + '/menu_items/'+ category + ".json").then(function (response) {
      return response.data;
    });
  };

}



})();
