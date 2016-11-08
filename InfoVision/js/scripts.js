(function () {
    'use strict';

    angular
        .module('infovision', [])
        .controller('dashboardController', dashboardController);

    function dashboardController($scope) {
        $scope.isPanelShow = false;
        $scope.toggleMenu = function () {
            if ($scope.isPanelShow) {
                $scope.isPanelShow = false;
                $scope.isExpand = "col-md-12 dashboard"

            } else {
                $scope.isPanelShow = true;
                $scope.isExpand = "col-md-10 dashboard"
            }
        }
    }
})();
