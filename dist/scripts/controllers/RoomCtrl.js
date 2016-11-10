(function() {
    function RoomCtrl(Room) {
        this.room = Room;
        this.activateRoom = function(room) {
            this.activeRoom = room;
        }
    };

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
