angular.module('studentApp.controllers')
.controller('LoginCtrl', function ($scope, $state, student, loading, alert) {

  student.logout().catch(function (err) {
    console.log(arguments);
  });

  $scope.login = function (uvid) {
    loading.load();
    student.login(uvid).then(function (data) {
      if (data.success) {
        return student.question();
      } else {
        console.error(data);
      }
    })
    .finally(function () {
      loading.unload();
    })
    .then(function (res) {
      if (!res.question) {
        return alert('You have answered all available questions. Check back later!');
      } else {
        $state.go('tab.question');
      }
    });
  };

});
