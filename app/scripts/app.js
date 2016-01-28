'use strict';

var app = angular
  .module('seenitApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });
app.factory('reddit', ['$http', '$q', function($http, $q) {
  var getJSON = function() {
    var deferred = $q.defer();
    $http.get('https://www.reddit.com/r/videos.json?limit=100')
      .success(function(data) {
        var posts = data.data.children;
        posts.forEach(function(post, i) {
          if (post.data.is_self) {
            posts.splice(i, 1);
          }
        });
        deferred.resolve(posts);
      })
      .error(function(err) {
        deferred.reject(err);
      });
    return deferred.promise;
  };
  return {
    getData: getJSON
  };
}]);

app.controller('MainCtrl', ['$scope', 'reddit', function($scope, reddit){
  $scope.data = '';
  reddit.getData().then(function(data) {
    console.log(data);
    $scope.data = data;
  });
}]);
