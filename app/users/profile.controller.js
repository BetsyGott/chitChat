angular.module('chitChatApp')
    .controller('ProfileCtrl', function($state, md5, auth, profile){
        var profileCtrl = this;

        profileCtrl.profile = profile;

        //using gravatar for avatars means we have to create an md5 hash of users' emails to send it
        profileCtrl.updateProfile = function(){
            profileCtrl.profile.emailHash = md5.createHash(auth.password.email);
            profileCtrl.profile.$save();
        };

        //go to channels after a successfully updated profile
        profileCtrl.updateProfile = function(){
            profileCtrl.profile.emailHash = md5.createHash(auth.password.email);
            profileCtrl.profile.$save().then(function(){
                $state.go('channels');
            });
        };

    });