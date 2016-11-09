(function () {
    'use strict';

    angular
        .module('livingItIndia')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, $rootScope, MainService) {
        $scope.myInterval = 3000;
        $scope.active = 2;
        $rootScope.login = MainService.login;
        $rootScope.handleLogin = MainService.handleLogin;
        $scope.slides = MainService.slides;
    }
})();
