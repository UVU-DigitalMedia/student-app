angular.module('studentApp', [
  'ionic',
  'cordovaInit',
  'studentApp.states',
  'studentApp.controllers',
  'studentApp.services'
]);

angular.module('studentApp.controllers', []);
angular.module('studentApp.services', []);

// TODO: delete everything after this line
angular.module('studentApp.controllers')
.controller('DashCtrl', function($scope) {
})
.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})
.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})
.controller('AccountCtrl', function($scope) {
});

angular.module('studentApp.services', [])
.factory('Friends', function() {
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];
  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});

