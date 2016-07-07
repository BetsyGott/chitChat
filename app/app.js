'use strict';

/**
 * @ngdoc overview
 * @name angularfireSlackApp
 * @description
 * # angularfireSlackApp
 *
 * Main module of the application.
 */
angular
  .module('angularfireSlackApp', [
    'firebase',
    'angular-md5',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/profile',
        resolve : {
            auth: function($state, Users, Auth){
                return Auth.$requireAuth().then(function(auth){
                    return Users.getProfile(auth.uid).$loaded();
                });
            },
              profile: function(Users, Auth){
                  return Auth.$requireAuth().then(function(auth){
                      return Users.getProfile(auth.uid).$loaded();
                  });
              }
        }
      })
        .state('profile', {
            url: '',
            templateUrl: ''
        })
      .state('login', {
        url: '/login',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'auth/login.html',
        resolve: {
            requireNoAuth: function($state, Auth){
                return Auth.$requireAuth().then(function(auth){
                      $state.go('home');
                }, function(error){
                      return;
                });
              }
          }
      })
      .state('register', {
        url: '/register',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'auth/register.html',
        resolve: {
              requireNoAuth: function($state, Auth){
                  return Auth.$requireAuth().then(function(auth){
                      $state.go('home');
                  }, function(error){
                      return;
                  });
              }
          }
      });

    $urlRouterProvider.otherwise('/');
  })
  .constant('FirebaseUrl', 'https://chitchat-8cc00.firebaseio.com');
