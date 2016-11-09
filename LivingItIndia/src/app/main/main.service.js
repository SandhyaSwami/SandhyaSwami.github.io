(function () {
    'use strict';

    angular
        .module('livingItIndia')
        .service('MainService', MainService);

    /** @ngInject */
    function MainService($rootScope, $state) {
        this.login = "Dashboard";
        this.handleLogin = function (){
            if($rootScope.login === "Dashboard"){
                $rootScope.login = "Carousel";
                if(sessionStorage.isSessionAlive){
                    $rootScope.showDashboard = true;
                    $state.go("login");
                }else{
                    $state.go("login");
                }
            }else{
                $rootScope.login = "Dashboard"
                $state.go("home")
            }

        };
        this.slides = [
            {
                image: 'http://placehold.it/1200x450'
            },
            {
                image: 'http://placehold.it/1200x450'
            },
            {
                image: 'http://placehold.it/1200x450'
            },
            {
                image: 'http://placehold.it/1200x450'
            }
        ];

    }
})();
