angular.module('chitChatApp')
    .controller('AuthCtrl', function(Auth, $state){
        var authCtrl = this;

        authCtrl.user = {
            email: '',
            password: ''
        };

        authCtrl.login = function(){
            Auth.$authWithPassword(authCtrl.user).then(function (auth){
                //successful authentication takes user to home
                $state.go('home');
            }, function (error){
                //if auth fails save the error msg to display to user
                authCtrl.error = error;
            });
        };

        authCtrl.register = function (){
            Auth.$createUser(authCtrl.user).then(function (user){
                //after registration, call login func to log new user in
                authCtrl.login();
            }, function (error){
                authCtrl.error = error;
            });
        };

    });