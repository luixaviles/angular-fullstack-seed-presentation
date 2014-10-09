'use strict';

var app = angular.module('myApp');
app.controller('DeveloperController', ['$scope',
    function ($scope) {
        $scope.students = [
            {ci: 1, name: 'Roberto', age: 18},
            {ci: 2, name: 'Juan', age: 19},
            {ci: 3, name: 'Maria', age: 20}
        ];

        $scope.gridOptions = {
            data: 'students'
        };
    }
]);
