var app = angular.module('madLibs');
app.controller('madOutput', function($scope, madLibFactory) {
$scope.user = madLibFactory.importIn();
console.log($scope.user);
});
