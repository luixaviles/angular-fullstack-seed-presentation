'use strict';

describe('Controller: DeveloperCtrl', function () {

  // load the controller's module
  beforeEach(module('myApp'));

  var DeveloperCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('api/developers')
      .respond([
            {ci: 1, name: 'Roberto', language: 'Java'},
            {ci: 2, name: 'Juan', language: 'PHP'}
        ]);
    scope = $rootScope.$new();
    DeveloperCtrl = $controller('DeveloperController', {
      $scope: scope
    });
  }));

  it('should attach a list of developers to the scope', function () {
    expect(scope.developers).toBeUndefined();
    $httpBackend.flush();
    expect(scope.developers.length).toBe(2);
  });
});
