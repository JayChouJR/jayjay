var app = angular.module('meuApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "../view/home.html",
      controller: "homeController"
    })
    .when("/login", {
      templateUrl: "../view/login.html",
      controller: "loginController"
    })
    .when("/detalhes", {
      templateUrl: "../view/detalhes.html",
      controller: "detalhesController"
    })
    .otherwise({
      redirectTo: "/"
    });
});
