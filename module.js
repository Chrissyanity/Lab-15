var app = angular.module('madLibs', ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/input', {
    controller: 'madInput',
    templateUrl: 'input.html'
  })
  .when('/output', {
    controller: 'madOutput',
    templateUrl: 'output.html'
  })
  .otherwise({ redirectTo: '/' });
  $locationProvider.hashPrefix('');
});
