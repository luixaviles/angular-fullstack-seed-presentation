'use strict';

angular.module('myApp')
  .controller('NavbarController', function ($scope, $location) {
        $scope.menu = [
            {
                'title': 'Home',
                'state': 'home'
            }
        ];
  });
