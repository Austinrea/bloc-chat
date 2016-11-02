(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref();
        var rooms = $firebaseArray(ref);

        if (rooms.length == 0) {
	        rooms = ["Room 1", "Room 2"];
	    }

        var createRoom = function(room) {
            rooms.$add(room)
        }

        return {
            all: rooms
	    };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
