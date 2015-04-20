'use strict';
describe('pcs-question-option', function () {
  var $rootScope;
  beforeEach(module('survey'));
  beforeEach(inject(function (_$rootScope_, $httpBackend) {
    $rootScope = _$rootScope_;
    $httpBackend.whenGET(/thanks\.html/).respond('html');
    $httpBackend.whenGET(/step[0-9]\.html/).respond('html');
  }));

  it('should render checkbox', inject(function ($compile, $templateCache) {
    var scope = $rootScope.$new();
    scope.m = {};
    scope.mc = {};
    var rnd = Math.ceil(Math.random()*999);
    var element = angular.element('<pcs-question-option title="t' + rnd + '" logo="l' + rnd + '" already-customer="true" model="m" model-customer="mc"></pcs-question-option>');
    element = $compile(element)(scope);
    scope.$digest();
    console.log(element);
    console.log($templateCache.get('app/components/pcs-question-option/question.option.html'));
    expect(element.html()).toContain('<input');
    expect(element.html()).toContain('<label');
  }));
});
