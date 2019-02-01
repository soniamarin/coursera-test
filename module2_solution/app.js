( function() {
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController' , ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
        var tobuy = this;

        tobuy.items1 = ShoppingListCheckOffService.tobuyItems();

        tobuy.removeItem = function (itemIndex) {
        ShoppingListCheckOffService.removeItem(itemIndex);
  };

};

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.items2 = ShoppingListCheckOffService.getItems();

  };

  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var items1 = [];
    var items2 = [];

  service.tobuyItems = function () {
    var item1 = {
        name: 'cookies',
        quantity: 10
      };
      items1.push(item1);

      item1 = {
          name: 'cookies',
          quantity: 10
        };
        items1.push(item1);

        item1 = {
            name: 'chips',
            quantity: 5
          };
          items1.push(item1);

          item1 = {
              name: 'ice cream',
              quantity: 2
            };
            items1.push(item1);

            item1 = {
                name: 'pepto bismol',
                quantity: 5
              };
              items1.push(item1);

      return items1;

    };
  //    item1 = {

    service.removeItem = function (itemIdex) {
      var item2 = items1[itemIdex]
      items1.splice(itemIdex, 1);
      items2.push(item2);

    };

    service.getItems = function () {
      console.log(items2);
      return items2;
    };
  }


})();
