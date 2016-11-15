(function() {
    function RoomCtrl(Room, Message) {
        var vm = this;
        this.room = Room;
        this.message = Message;
        this.activateRoom = function(room) {
            this.activeRoom = room;
            this.message.all = this.message.getByRoomId(room.$id);
        }
        this.room.all.$loaded().then(function(rooms){
            vm.activateRoom(vm.room.all[0]);
        });
    };

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', RoomCtrl]);
})();
