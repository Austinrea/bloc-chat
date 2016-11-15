(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        var getByRoomId = function (roomId) {
            return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
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
            //all: messages,
			createMessage: createMessage,
            getByRoomId: getByRoomId
	    };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
