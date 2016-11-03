(function() {
	function config($stateProvider, $locationProvider) {
		$locationProvider
		.html5Mode({
			enabled: true,
			requireBase: false
		});

		$stateProvider
		  .state('rooms', {
			url: '/',
			controller: 'RoomCtrl as roomCtrl',
			templateUrl: '/templates/room.html'
		})
		  .state('forums', {
			  url: '/forums',
			  controller: 'ForumCtrl as forumCtrl',
			  templateUrl: '/templates/forum.html'
		})
		  .state('users', {
			url: '/users',
			controller: 'UserCtrl as userCtrl',
			templateUrl: '/templates/user.html'
		});
	}

	angular
		.module('blocChat', ['firebase', 'ui.router'])
		.config(config);
})();
