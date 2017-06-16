angular.module('devmtnTravel')
  .controller('packagesCtrl', function($scope, $stateParams, mainService) {
    var country = $stateParams.country;

    if (country) {
      $scope.packageInfo = mainService.packageInfo.filter(function(package) {
        return package.country === country;
      })
    } else {
      $scope.packageInfo = mainService.packageInfo;
    }
  });
