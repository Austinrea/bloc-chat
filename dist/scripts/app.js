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
		});
	}

	angular
		.module('blocChat', ['firebase', 'ui.router', 'ui.bootstrap'])
		.config(config);
})();
