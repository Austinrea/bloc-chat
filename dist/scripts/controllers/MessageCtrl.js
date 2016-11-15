(function() {
    function MessageCtrl(Message) {
        this.message = Message;
        //this.getByRoomId = getByRoomId;
    };

    angular
        .module('blocChat')
        .controller('MessageCtrl', ['Message', MessageCtrl]);
})();
