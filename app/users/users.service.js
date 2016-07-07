angular.module('angularfireSlackApp')
    .factory('Users', function($firebaseArray, $firebaseObject, FirebaseUrl){

        var Users = {};

        return Users;
    });