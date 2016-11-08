(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        return {
            getByRoomId: function (roomId) {
                var ref = firebase.database().ref().child("messages");
                ref.orderByChild('messages').equalTo(roomId) {
                });
            }
        };

        messages.$loaded().then(function(messages) {
            if (messages.length == 0) {
    	        messages.$add("Hello, how are you?");
                messages.$add("I'm good thanks.");
    	    }
        });

		var createMessage = function($scope, newMessage) {
			var ref = firebase.database().ref().child("messages");
			var messages = $firebaseArray(ref);
			messages.$add(newMessage);
		}

        return {
            all: messages,
			createMessage: createMessage
	    };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
