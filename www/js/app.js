// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('todoapp', ['ionic']);


//Variavel vetor fora dos controlers para poder receber a variavel globalmente.
var tarefas = [
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

// Esta funcao das configuracoes define o stateprovider como list, os parametros são as views e os lugares que elas estão.
// Aqui usamos o método stateprovider para poder passar o estado, e o urlrouter para definir a rota.
app.config(function($stateProvider, $urlRouterProvider){

// Cada um desses é um estado (View), onde o nome LIST é o nome que usamos no código, URL é o caminho e templateUrl é o local do arquivo.
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

  $scope.tarefas = tarefas;


  $scope.concluir = function(indice){
    $scope.tarefas[indice].feita = true;
  }

  $scope.apagar = function(indice){
    $scope.tarefas.splice(indice);
  }

  $scope.mensagem = "Hello World!";

});






// Usamos APP para criar um controler, ele vai controlar a tela novo, o scope é o escopo da tela, as variaveis da tela e tal.
// Também usamos o método STATE, ele nos permite definir o estado (view) que queremos carregar
app.controller('NovoCtrl', function($scope, $state){

  $scope.salvar = function(){

    var tarefa = {
      "texto": $scope.texto,
      "data": new Date(),
      "feita": false
    };

    tarefas.push(tarefa);
    $state.go('list');

  }

});
