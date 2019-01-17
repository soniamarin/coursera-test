(function () {
  'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name="";
  $scope.stateOfBeing=0;

$scope.checkIfTooMuch = function () {
    console.log($scope.name);
    if ($scope.name == "") {
      $scope.sayMessage = function () {
        return "Please enter data first";
    };
  } else {
      var str = $scope.name;
      var words = str.split(',');
        $scope.stateOfBeing = words.length;
        if ($scope.stateOfBeing < 4) {
          $scope.sayMessage = function () {
            return "Enjoy!";
          };
        } else {
          $scope.sayMessage = function () {
            return "Too much!";
        };
      };
    };
  };
};
})();
