( function() {
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath',"https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'narrowList.html',
    restrict: 'E',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    bindToController: true,
    controllerAs: "ctrl"

  };

  return ddo;
}

function FoundItemsDirectiveController () {};

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var narrow = this;

    narrow.searchTerm = "";
      narrow.foundItems = function(searchTerm) {
        if (searchTerm === "") {
          narrow.found = [];
          return;
      }
        else {
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

      promise.then(function (items) {
        narrow.found = items;
      })
      .catch(function (error) {
        console.log(error);
      })

    }
  }


    narrow.removeItem = function (itemIndex) {

      MenuSearchService.remove(narrow.found,itemIndex);

    };

};


MenuSearchService.$inject = ['$http','ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
    var service = this;

            service.getMatchedMenuItems = function (searchTerm) {

              searchTerm = searchTerm.trim().toLowerCase();

              return $http ({
              method: "GET",
              url: (ApiBasePath + "/menu_items.json")
            }).then(function(response) {
                  var foundItems = [];
                  for (var i = 0; i < response.data.menu_items.length; i++) {
                  var description = response.data.menu_items[i].description;
                  if (description.toLowerCase().indexOf(searchTerm) !== -1) {
                    foundItems.push(response.data.menu_items[i]);
                    console.log("items;",foundItems, "this is:", this);
                  }
                }
                return foundItems;

            },
            function error(response) {

          })
        }

          service.remove = function (items,itemIndex) {
            items.splice(itemIndex, 1);
          };
}

})();
