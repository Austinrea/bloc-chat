(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        var activeRoom = function($scope, rooms) {
            var ref = firebase.database().ref().child("rooms");
            var rooms = $firebaseArray(ref);
            $scope.activeRoom = rooms;
        };

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
		};

        return {
            all: rooms,
			createRoom: createRoom,
            activeRoom: activeRoom
	    };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
