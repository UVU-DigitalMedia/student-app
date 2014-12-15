angular.module('studentApp.controllers')
.controller('QuestionCtrl', function ($scope, $state, student, loading) {

  $scope.logout = function () {
    $state.go('tab.login');
  };

});
