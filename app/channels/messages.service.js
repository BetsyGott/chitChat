angular.module('angularfireSlackApp')
    .factory('Messages', function($firebaseArray, FirebaseUrl){

        var channelMessagesRef = new Firebase(FirebaseUrl+'channelMessages');

        return {
            forChannel: function(channelId){
                //gets back all the messages for a specific channel id
                return $firebaseArray(channelMessagesRef.child(channelId));
            }
        };
    });