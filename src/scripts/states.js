angular.module('studentApp.states', ['ionic'])
.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

  $httpProvider.defaults.withCredentials = true;

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'partials/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.login', {
      url: '/login',
      views: {
        'tab-login': {
          templateUrl: 'partials/tabs/login.html',
          controller: 'LoginCtrl'
        }
      }
    })

    .state('tab.question', {
      url: '/question',
      views: {
        'tab-login': {
          templateUrl: 'partials/tabs/question.html',
          controller: 'QuestionCtrl'
        }
      }
    });

    // .state('tab.friends', {
    //   url: '/friends',
    //   views: {
    //     'tab-friends': {
    //       templateUrl: 'partials/tabs/friends.html',
    //       controller: 'FriendsCtrl'
    //     }
    //   }
    // })
    // .state('tab.friend-detail', {
    //   url: '/friend/:friendId',
    //   views: {
    //     'tab-friends': {
    //       templateUrl: 'partials/tabs/friend-detail.html',
    //       controller: 'FriendDetailCtrl'
    //     }
    //   }
    // })
    //
    // .state('tab.account', {
    //   url: '/account',
    //   views: {
    //     'tab-account': {
    //       templateUrl: 'partials/tabs/account.html',
    //       controller: 'AccountCtrl'
    //     }
    //   }
    // });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/login');
});
