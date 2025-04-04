var app = angular.module('meuApp', []);

app.controller('LoginController', function($scope, $http) {
  
  $scope.username = 'kevin';
  $scope.password = 1234

  $http.post('/api/login', { username: $scope.username, password: $scope.password })
    .then(function(response) {
      console.log('Usuário logado com sucesso:', response.data);
    }, function(error) {
      console.error('Erro ao fazer login:', error);
    });

});