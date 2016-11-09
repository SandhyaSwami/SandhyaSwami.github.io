(function () {
    'use strict';

    angular
        .module('livingItIndia')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/components/login/login.html',
                controller: 'LoginController'
            });
        $urlRouterProvider.otherwise('/');
    }
})();
