angular.module('loading', ['ionic'])
.factory('loading', function ($ionicLoading) {
  return {
    load: function (template) {
      template = template || 'Loading...';
      $ionicLoading.show({template: template});
    },
    unload: function () {
      $ionicLoading.hide();
    }
  };
});
