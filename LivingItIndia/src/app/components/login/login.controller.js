(function () {
	'use strict';

	angular
		.module('livingItIndia')
		.controller('LoginController', LoginController);

	/** @ngInject */
	function LoginController($scope, $state, MainService) {
		$scope.registerHandler = registerHandler;
		$scope.loginHandler = loginHandler;
		$scope.addImageHandler = addImageHandler;
		$scope.removeImageHandler = removeImageHandler;
		$scope.slides = MainService.slides;
		$scope.removeImageFromArray = removeImageFromArray;
		function registerHandler(){
			localStorage.setItem($scope.email, $scope.password);
			//$state.go("dashboard");
			sessionStorage.isSessionAlive = true;
			$scope.showDashboard = true;

		}
		function loginHandler(){
			var passwordStored = localStorage.getItem($scope.email);
			if(passwordStored === $scope.password){
				sessionStorage.isSessionAlive = true;
				$scope.showDashboard = true;
			}else {
					$scope.wrongCredentials = true;
			}
		}

		function addImageHandler(imageURL){
			var tempObj = {};
			tempObj.image = imageURL;
			MainService.slides.push(tempObj);
			//$scope.$digest();
		}

		function removeImageHandler(){
			var passwordStored = localStorage.getItem($scope.email);
			if(passwordStored === $scope.password){

			}else {

			}
		}

		function removeImageFromArray(index){
			if (index >= 0 && index < $scope.slides.length)
			{
				$scope.slides.splice(index, 1);
			}
		}
	}
})();
