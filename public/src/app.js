var app = angular.module('myApp', []);
app.controller('myController', myController);
function myController($scope, $http) {
  $scope.title = 'Xin chao!!!';
}