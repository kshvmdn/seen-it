'use strict';

var app = angular.module('seenitApp', [
    'ngRoute',
    'ngSanitize'
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

app.filter('sanitize', ['$sce', function($sce) {
  return function(value){
    if (value) {
      return $sce.trustAsHtml(value.replace('&lt;', '<').replace('&gt;', '>'));
    }
  };
}]);

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

app.controller('MainCtrl', ['$scope', '$window', 'reddit', function($scope, $window, reddit) {

  $scope.video = '';
  $scope.currentIndex = 0;

  var setNewVid = function(i) {
    $scope.video = $scope.data[i].data;
    console.log($scope.video.url);
  };

  reddit.getData().then(function(data) {
    console.log(data);
    $scope.data = data;
    return setNewVid($scope.currentIndex);
  });

  $scope.next = function() {
    $scope.currentIndex++;
    if ($scope.currentIndex > $scope.data.length) {
      $window.location.reload();
    }
    return setNewVid($scope.currentIndex);
  };

  $scope.rand = function() {
    var i = Math.floor(Math.random() * ($scope.data.length - $scope.currentIndex)); // rand vid from all not watched
    return setNewVid(i);
  };
}]);
