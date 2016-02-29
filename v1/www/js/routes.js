angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('startPage', {
      url: '/start',
      templateUrl: 'templates/startPage.html',
      controller: 'startPageCtrl'
    })
        
      
    
      
        
    .state('meatTypes', {
      url: '/all-meat-types',
      templateUrl: 'templates/meatTypes.html',
      controller: 'meatTypesCtrl'
    })

    .state('meatGroup', {
      url: '/meat-group/:id',
      templateUrl: 'templates/meatGroup.html',
      controller: 'meatGroupCtrl'
    })
        
      
    
      
        
    .state('meatDetail', {
      url: '/meat/:id',
      templateUrl: 'templates/meatDetail.html',
      controller: 'meatDetailCtrl'
    })
        
      
    
      
        
    .state('meatsBeef', {
      url: '/beef',
      templateUrl: 'templates/meatsBeef.html',
      controller: 'meatsBeefCtrl'
    })
        
      
    
      
        
    .state('meatsPork', {
      url: '/pork',
      templateUrl: 'templates/meatsPork.html',
      controller: 'meatsPorkCtrl'
    })
        
      
    
      
        
    .state('meatsLamb', {
      url: '/lamb',
      templateUrl: 'templates/meatsLamb.html',
      controller: 'meatsLambCtrl'
    })
        
      
    
      
        
    .state('meatsPoultry', {
      url: '/poultry',
      templateUrl: 'templates/meatsPoultry.html',
      controller: 'meatsPoultryCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/start');

});
