'use strict';

describe('myApp.greet module', function() {

  beforeEach(module('myApp.greet'));

  describe('greet controller', function(){

    it('should initalize the name and greetMsg', inject(function($controller) {
      //spec body
        var dummyScope = {};
      var greetController = $controller('greetController', {$scope : dummyScope});
      expect(dummyScope.name).toBe('');
        expect(dummyScope.greetMsg).toBe('');
    }));

    it('should populate greetMsg when greeted', inject(function($controller) {
      //spec body
        var dummyScope = {};
      var greetController = $controller('greetController', {$scope : dummyScope});
      dummyScope.name = 'Magesh';
        dummyScope.greet();
        expect(dummyScope.greetMsg).toBe('Hi Magesh, Have a nice day!');
    }));

  });
});
