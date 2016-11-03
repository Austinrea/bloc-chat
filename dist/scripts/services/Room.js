(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

	    if (rooms.length == 0) {
	        rooms = ["Room 1", "Room 2"];
	    }

		var create = function(name) {
			var ref = firebase.database().ref().child("rooms");
			var rooms = $firebaseArray(ref);
			rooms.$add(name);
		}

        return {
            all: rooms,
			create: create
	    };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
