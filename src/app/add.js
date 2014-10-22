'use strict';

angular.module('add',
  [
    'ngAnimate',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    'add.conteudo'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('inicial', {
        url: '/',
        views: {
          '' : {
            templateUrl: 'app/conteudo/estrutura.html'
          },
          'conteudo@inicial' : {
            templateUrl: 'app/conteudo/pagina-inicial.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  });
