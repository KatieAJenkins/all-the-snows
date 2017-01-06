(function() {
  'use strict';

  angular.module('app')
    .component('snow', {
      controller: controller,
      templateUrl: '/js/snow/SnowList.template.html'
    });

    function controller(){

      const vm = this;
      vm.addSnowType = addSnowType;
      vm.resetForm = resetForm;
      vm.snowTypes = [
        {
          type:'hoarfrost',
          description:'the deposition of ice crystals on a surface when the temperature of the surface is lower than the frost point of the surrounding air. In this process, moisture goes directly from vapor to solid, skipping the liquid phase. Hoar frost is usually composed of interlocking ice crystals, and tends to form on objects of small diameter that are freely exposed to air, such as wires, poles, tree branches, plant stems, and leaf edges.'
        },
        {
          type: 'graupel',
          description: 'consists of snowflakes that become rounded, opaque pellets ranging from 2 to 5 millimeters (0.1 to 0.2 inches) in diameter. They form as ice crystals fall through supercooled cloud droplets, which are below freezing but remain a liquid. The cloud droplets then freeze to the crystals, forming a lumpy mass. Graupel is sometimes mistaken for hail, but tends to have a texture that is softer and more crumbly. Graupel is sometimes also called snow pellets.'
        }
      ];

      function addSnowType(){
        vm.snowTypes.push(vm.snow);
        delete vm.snow;
        vm.resetForm();
      }

      function resetForm(){
        vm.addSnowTypeForm.$setPristine();
        vm.addSnowTypeForm.$setUntouched();
      }

    }

}());
