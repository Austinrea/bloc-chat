(function() {
    function RoomCtrl(Room) {
        this.room = Room;
        this.create = Create;
    };

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Create', RoomCtrl]);
})();
