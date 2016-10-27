(function() {
    function RoomCtrl($firebaseArray) {
        firebase.database().ref().child("rooms");
    };

    angular
        .module('blocChat')
        .controller('Room', ['$firebaseArray', Room]);
})();