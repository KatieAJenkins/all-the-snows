(function() {
  'use strict';

  angular.module('app')
    .component('snow', {
      controller: controller,
      templateUrl: '/js/snow/SnowList.template.html'
    });

    function controller(){
      console.log('this is my controller');
      const vm = this;
      vm.snows = [{type:'', description:''}];

      
    }

}());
