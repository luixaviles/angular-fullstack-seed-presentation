'use strict';

var app = angular.module('myApp');
app.controller('DeveloperController', ['$scope', '$http',
    function ($scope, $http) {
        $http({method: 'GET', url: 'api/developers'}).success(function(data){
            $scope.developers = data;
        });

        $scope.comments = "Great developers.";

        $scope.gridOptions = {
            data: 'developers',
            enableColumnResize: true,
            enableColumnReordering: true,
            multiSelect: false,
            width: 'auto',
            rowHeight: 40,
            enableCellSelection: true,
            enableCellEditOnFocus: true,
            enableRowSelection: false
        };

        $scope.submit = function(){
//            alert('Are you ready to submit?');
            $scope.dataSentMessage = 'Success';
        }
    }
]);
