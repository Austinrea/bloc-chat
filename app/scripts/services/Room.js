(function() {
    function Room($scope, $firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var $scope.rooms = $firebaseArray(ref);

	    if (rooms.length == 0) {
	        $scope.rooms = ["Room1", "Room2"];
	    }

        return {
            all: $scope.rooms
	    };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
