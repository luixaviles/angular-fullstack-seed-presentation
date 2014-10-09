'use strict';

angular.module('myApp')
  .controller('DefaultController', function ($scope, $http) {
    $http.get('/api/tech').success(function(technologies) {
      $scope.technologies = technologies;
    });
  });
