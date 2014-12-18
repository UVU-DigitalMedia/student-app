angular.module('studentApp.services')
.factory('student', function ($http, alert, $q) {
  var api     = 'http://10.0.1.69:3000/v1';
  var student = {};

  $http.get(api).error(function (err) {
    alert('Could not connect to server');
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

  student.question = function () {
    return $http.get(api + '/student/question').then(returnData);
  };

  student.answer = function (qid, value) {
    if (typeof value === 'object') {
      value = Object.keys(value).filter(function (value) { return value; });
    }
    return $http.post(api + '/student/answer/' + qid, {value: value})
      .then(returnData);
  };

  function returnData(res) {
    return res.data;
  }

  return student;

});
