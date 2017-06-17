angular.module('devmtnTravel')
.controller('bookedCtrl', function($scope, $stateParams, mainService) {
  var booked = $stateParams.id;

  if (booked) {

    // $scope.packageInfo = mainService.packageInfo.filter(function(package) {
    //
    //   return package.id == booked;
    // })

    mainService.packageInfo.forEach(function(package) {
      if (package.id == booked) {
        $scope.booked = package;
      }
    })



  }
});
