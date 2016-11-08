(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        var setCurrentRoom = "";

        rooms.$loaded().then(function(rooms) {
            if (rooms.length == 0) {
    	        rooms.$add("Room 1");
                rooms.$add("Room 2");
    	    }
        });

		var createRoom = function($scope, roomName) {
			var ref = firebase.database().ref().child("rooms");
			var rooms = $firebaseArray(ref);
			rooms.$add(roomName);
		}

        return {
            all: rooms,
			createRoom: createRoom
	    };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
