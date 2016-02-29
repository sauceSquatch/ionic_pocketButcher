angular.module('app.controllers', [])

.controller('meatTypesCtrl', function ($scope, $stateParams, MeatService) {

  $scope.meatTypes = [];

  MeatService.getMeatTypes().then(function(res) {
    $scope.meatTypes = res;
  });
  
})

.controller('meatGroupCtrl', function ($scope, $stateParams, MeatService) {
  $scope.meatGroup = {};



  MeatService.getMeatGroup($stateParams.id).then(function(res) {
    $scope.meatGroup = res;
  })
})
  
.controller('startPageCtrl', function($scope) {

})
   

.controller('meatDetailCtrl', function ($scope, $stateParams, MeatService) {

  $scope.meat = {};
  console.log("meatDetail scope: ", $scope);
  console.log("meatDetail $stateParams: ", $stateParams);

  MeatService.getMeat($stateParams.id).then(function(res) {
    $scope.meat = res;
    console.log("$scope.meat: " + $scope.meat);
  })

})
   
.controller('meatsBeefCtrl', function($scope) {
  // $scope.beefCuts = [];

  // MeatService.getBeef().then(function(res)) {
  //   $scope.beefCuts = res;
  // }
})
   
.controller('meatsPorkCtrl', function($scope) {

})
   
.controller('meatsLambCtrl', function($scope) {

})
   
.controller('meatsPoultryCtrl', function($scope) {

})
 
