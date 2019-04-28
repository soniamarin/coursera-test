(function () {
"use strict";

angular.module('public')
.directive('dishExist', DishExist);

DishExist.$inject = ['$http', '$q', 'ApiPath'];
function DishExist ($http, $q, ApiPath) {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$asyncValidators.dishExist = function(modelValue, category) {
                return $http.get(ApiPath + '/menu_items/'+ category + ".json")
                    .then(
                      function(response) {
                          return true;
                              if (!response.data.status) {
                                   return $q.reject();
                                  //Server will give me a  notify if it exist or not. I will throw a error If it exist with "reject"
                              }
                     });
                    }
            }
        }
    }
})();
