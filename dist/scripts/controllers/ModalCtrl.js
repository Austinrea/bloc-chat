(function() {
    function ModalCtrl($uibModalInstance, Room) {
        this.room = Room;
    };

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', ModalCtrl]);
})();
