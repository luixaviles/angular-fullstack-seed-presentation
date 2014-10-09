'use strict';

var app = angular.module('myApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'ngGrid'
]);
app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: 'partials/main.html'
            })
            .state('developer', {
                url: "/developers",
                templateUrl: 'partials/developer.html'
            })
        ;
    }
]);