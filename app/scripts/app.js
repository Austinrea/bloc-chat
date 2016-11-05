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
		});
	}

	angular
		.module('blocChat', ['firebase', 'ui.router', 'ui.bootstrap'])
		.config(config);
})();
