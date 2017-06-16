angular.module('devmtnTravel')
.controller('packagesCtrl', function($scope, $stateParams, mainService) {
  var booked = $stateParams.country;
