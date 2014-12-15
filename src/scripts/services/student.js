angular.module('studentApp.services')
.factory('student', function ($http, $ionicPopup, $q) {
  var api     = 'http://localhost:3000/v1';
  var student = {};

  $http.get(api).error(function (err) {
    $ionicPopup.alert({title: 'Could not connect to server'});
  });

  student.current = function () {
    return $http.get(api + '/student/current').then(returnData);
  };

  student.login = function (uvid) {
    if (!uvid) {
      return $q(function (resolve, reject) {
        reject(new Error('No UVID given'));
      });
    }
    return $http.post(api + '/student/' + uvid + '/login').then(returnData);
  };

  student.logout = function () {
    return $http.post(api + '/student/logout').then(returnData);
  };

  function returnData(res) {
    return res.data;
  }

  return student;

});
