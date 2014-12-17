angular.module('studentApp.controllers')
.controller('QuestionCtrl', function ($scope, $state, student, alert) {

  $scope.data = {};

  $scope.logout = function () {
    $state.go('tab.login');
  };

  student.question().then(function (res) {
    if (!res.question) {
      var msg = 'You have no new questions to answer. Check back again later!';
      return alert(msg).then($scope.logout);
    }
    $scope.question = res.question;
  });

  $scope.submit = function (value) {
    if (value == null) {
      return alert('You must select a value');
    }
    if (value === 'Other') {
      value += ': ' + $scope.data.other;
    } else if (value.Other) {
      delete value.Other;
      value['Other: ' + $scope.data.other] = true;
    }
    student.answer($scope.question._id, value).then(function (res) {
      alert('Thank you for your submission!').finally($scope.logout);
    }).catch(function (err) {
      console.error(err);
    });
  };

});
