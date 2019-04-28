(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuService','RegistrationService'];

function RegistrationController(MenuService, RegistrationService) {
  var reg = this;


  reg.submit = function () {
    reg.completed = true;

  var promise = MenuService.getMenuItems(reg.user.favordish);
  promise.then(function(response) {
    reg.user.item = response.data;
    reg.user.message = '';
  }).catch(function(error) {
    reg.user.message = 'No such menu number exists';
  });

      try {
      RegistrationService.save(
      reg.user.firstname, reg.user.lastname, reg.user.email,
      reg.user.phone, reg.user.favordish);
      reg.message = "Your information has been saved"
      reg.errorMessage = ""
    } catch (error) {
      reg.errorMessage = "Something was wrong";
    }
  }
}
})();
