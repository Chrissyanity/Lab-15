var app = angular.module('madLibs');
app.factory('madLibFactory', function() {
  var libsInfo = {};
  return {
    exportTo: function(data) {
      libsInfo = data;
      },
    importIn: function() {
      return libsInfo;
    }
  }
});
