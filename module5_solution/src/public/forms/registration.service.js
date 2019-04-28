(function () {
"use strict";

angular.module('public')
.service('RegistrationService', RegistrationService);

function RegistrationService() {
  var service = this;
  var items = [];
  service.save = function(firstname,lastname,email,phone,favorite) {
      var info = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        favorite: favorite
      };
      items.push(info);
      console.log(items);
    };

    service.getprofile = function() {
        console.log(items)
        return items;
      }
}
})();
