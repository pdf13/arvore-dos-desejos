'use strict';

angular.module('add.conteudo', [])
  .config(function ($stateProvider) {
    $stateProvider
      .state('boleto', {
        parent: 'inicial',
        url: 'boleto',
        views: {
          'conteudo@inicial' : {
            templateUrl: 'app/conteudo/doacao-boleto.html'
          }
        }
      })
      .state('cartao', {
        parent: 'inicial',
        url: 'cartao',
        views: {
          'conteudo@inicial' : {
            templateUrl: 'app/conteudo/doacao-cartao.html'
          }
        }
      });
  });
