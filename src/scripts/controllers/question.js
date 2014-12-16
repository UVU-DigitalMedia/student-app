angular.module('studentApp.controllers')
.controller('QuestionCtrl', function ($scope, $state, student) {

  $scope.logout = function () {
    $state.go('tab.login');
  };

});
