var app = angular.module('meuApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "../view/home.html",
      controller: "HomeController"
    })
    .when("/login", {
      templateUrl: "../view/login.html",
      controller: "LoginController"
    })
    .when("/detalhes", {
      templateUrl: "../view/detalhes.html",
      controller: "DetalhesController"
    })
    .when("/leitura", {
      templateUrl: "../view/leitura.html",
      controller: "LeituraController"      
    })
    .otherwise({
      redirectTo: "/"
    });
});
