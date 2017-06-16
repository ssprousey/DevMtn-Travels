angular.module('devmtnTravel')
  .controller('locationsCtrl', function($scope, $stateParams, mainService) {
    $scope.test = "Hola Amigas";

    

    $scope.travelInfo = mainService.travelInfo;

  });
