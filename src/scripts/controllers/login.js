angular.module('studentApp.controllers')
.controller('LoginCtrl', function ($scope, $state, student, loading) {

  student.logout().catch(function (err) {
    console.log(arguments);
  });

  $scope.login = function (uvid) {
    loading.load();
    student.login(uvid).then(function (data) {
      if (data.success) {
        $state.go('tab.question');
      } else {
        console.error(data);
      }
    }).finally(function () {
      loading.unload();
    });
  };

});
