(function() {
	function ModalCtrl($scope, $uibModal, Room) {
		this.room = Room;

		this.open = function() {
			$uibModal.open({
				animation: true,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: '/templates/modal.html',
				controller: 'ModalCtrl',
				controllerAs: 'modal'
			});
		};

		this.close = function(){
			if($scope.roomName === undefined) {
				$scope.$close();
			} else if ($scope.roomName.length > 12) {
				alert("Please try again, creating a Room name with maximum 12 characters");
			} else {
				this.room.createRoom($scope, $scope.roomName);
				$scope.$close();
			}
		};

		this.dismiss = function(){
			$scope.$dismiss();
		};
	};

	angular
		.module('blocChat')
		.controller('ModalCtrl', ['$scope', '$uibModal', 'Room', ModalCtrl]);
})();
