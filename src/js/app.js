angular.module('Random', [
  'ngRoute',
  'mobile-angular-ui',
  'Random.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});