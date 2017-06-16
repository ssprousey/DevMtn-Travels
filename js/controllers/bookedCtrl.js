angular.module('devmtnTravel')
.controller('packagesCtrl', function($scope, $stateParams, mainService) {
  var booked = $stateParams.country;

  if (booked) {
    $scope.packageInfo = mainService.packageInfo.filter(function(booked) {
      return package.country === country;
    })
  } else {
    $scope.packageInfo = mainService.packageInfo;
  }
});
