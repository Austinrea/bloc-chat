(function() {
    function UserCtrl() {
        this.user = ['James', 'John', 'Sam'];
    };

    angular
        .module('blocChat')
        .controller('UserCtrl', [UserCtrl]);
})();
