// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('todoapp', ['ionic']);

// Esta funcao das configuracoes define o stateprovider como list, os parametros são as views e os lugares que elas estão.
app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state('list', {
    url: '/list',
    templateUrl: 'templates/lista.html'
  });

  $stateProvider.state('new', {
    url: '/new',
    templateUrl: 'templates/novo.html'
  });

  // o urlrouter define a rota, o otherwie significa que se nada for apontado, carrega essa mesmo.
  $urlRouterProvider.otherwise('/list');


});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});


app.controller('ListaCtrl', function($scope) {
  // Código da função Lista do Controler.
  // Controler é responsável por controlar o app.
  // O controller é tipo a classe que criou aqui, que vai poder ser definida em um ponto do html,
  // Ai tem as funções dentro, que são a sub-classe que da para adicionar.

  $scope.tarefas = [
    {
      "texto": "Realizar as atividades do curso",
      "data": new Date(),
      "feita": false
    },
    {
      "texto": "Passear com o cachorro",
      "data": new Date(),
      "feita": true
    }
  ];


  $scope.concluir = function(indice){
    $scope.tarefas[indice].feita = true;
  }

  $scope.apagar = function(indice){
    $scope.tarefas.splice(indice);
  }

  $scope.mensagem = "Hello World!";

});
