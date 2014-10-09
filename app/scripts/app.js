'use strict';

var app = angular.module('myApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router'
]);
app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: 'partials/default/main.html'
            })
        ;
    }
]);