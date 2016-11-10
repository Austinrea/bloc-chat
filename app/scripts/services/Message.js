(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        var getByRoomId = function (roomId) {
                var ref = firebase.database().ref().child("messages");
                ref.orderByChild("roomId").on("messages").equalTo("-KVuUf6HnQakv812C3Al");
        };

        // messages.$loaded().then(function(messages) {
        //     if (messages.length == 0) {
    	//         messages.$add("Hey, how're you doing?");
        //         messages.$add("I'm good thanks.");
    	//     }
        // });

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
