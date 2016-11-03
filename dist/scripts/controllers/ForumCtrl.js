(function() {
    function ForumCtrl() {
        this.forum = ['Forum 1', 'Forum 2', 'Forum 3', 'Forum 4'];
    };

    angular
        .module('blocChat')
        .controller('ForumCtrl', [ForumCtrl]);
})();
