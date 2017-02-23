var app = angular.module('madLibs');
app.controller('madInput', function($scope, madLibFactory, $location){
$scope.importIn = function(user) {
  console.log(user);
  madLibFactory.exportTo(user);
  $location.path('/output');
};
});
