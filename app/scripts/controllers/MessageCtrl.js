(function() {
    function MessageCtrl(Message) {
        this.message = Message;
    };

    angular
        .module('blocChat')
        .controller('MessageCtrl', ['Message', MessageCtrl]);
})();
