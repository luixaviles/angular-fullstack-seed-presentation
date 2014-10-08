'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('myApp'));

  var DefaultController,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/tech')
      .respond(['AngularJS', 'Karma', 'Express']);
    scope = $rootScope.$new();
      DefaultController = $controller('DefaultController', {
      $scope: scope
    });
  }));

  it('should attach a list of technologies to the scope', function () {
    expect(scope.technologies).toBeUndefined();
    $httpBackend.flush();
    expect(scope.technologies.length).toBe(3);
  });
});
