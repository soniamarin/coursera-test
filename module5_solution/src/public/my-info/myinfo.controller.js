(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['profile', 'MenuService'];
function MyinfoController(profile, MenuService) {
  var info = this;
  info.profile = profile;
  if (info.profile.length > 0) { 
      console.log(info.profile[0].favorite);
      var promise = MenuService.getMenuItems(info.profile[0].favorite);
      console.log(promise);
      promise.then(function(response) {
        console.log(response);
        info.profile.photo = response.category_short_name;
        info.profile.name = response.name;
        info.profile.description = response.description;
      }).catch(function(error) {
        info.profile.message = 'something was wrong!';
      })
    }
}
})();
