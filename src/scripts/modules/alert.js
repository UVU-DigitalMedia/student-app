angular.module('alert', ['ionic'])
.factory('alert', function ($ionicPopup) {
  return function (text) {
    return $ionicPopup.alert({title: text});
  };
});
