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
		  .state('modal', {
			url: '/modal',
			controller: 'ModalCtrl as modalCtrl',
			templateUrl: '/templates/modal.html'
		})
		  .state('messages', {
			url: '/message',
			controller: 'MessageCtrl as messageCtrl',
			templateUrl: '/templates/message.html'
		});
	}

	angular
		.module('blocChat', ['firebase', 'ui.router', 'ui.bootstrap', 'ngCookies'])
		.config(config);
})();
