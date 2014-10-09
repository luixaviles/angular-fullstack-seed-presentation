'use strict';

var app = angular.module('myApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap'
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
            .state('student', {
                url: "/student",
                templateUrl: 'partials/student.html'
            })
        ;
    }
]);