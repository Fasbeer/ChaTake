angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('chaTale', {
    url: '/page1',
    templateUrl: 'templates/chaTale.html',
    controller: 'chaTaleCtrl'
  })

  .state('selectSong', {
    url: '/page2',
    templateUrl: 'templates/selectSong.html',
    controller: 'selectSongCtrl'
  })

  .state('first', {
    url: '/page3',
    templateUrl: 'templates/first.html',
    controller: 'firstCtrl'
  })

  .state('timer', {
    url: '/page4',
    templateUrl: 'templates/timer.html',
    controller: 'timerCtrl'
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('page7', {
    url: '/page7',
    templateUrl: 'templates/page7.html',
    controller: 'page7Ctrl'
  })

  .state('passwordReset', {
    url: '/page8',
    templateUrl: 'templates/passwordReset.html',
    controller: 'passwordResetCtrl'
  })

  .state('page9', {
    url: '/page9',
    templateUrl: 'templates/page9.html',
    controller: 'page9Ctrl'
  })

  .state('thanks', {
    url: '/page10',
    templateUrl: 'templates/thanks.html',
    controller: 'thanksCtrl'
  })

$urlRouterProvider.otherwise('/page5')

  

});