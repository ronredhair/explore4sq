'use strict';

var app = angular
  .module('explore4sqApp', [
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'chieffancypants.loadingBar',
    'ngAnimate'
  ]);

  app.config(function ($routeProvider) {
    $routeProvider


        .when('/explore', {
            templateUrl: 'views/placesresults.html',
            controller: 'placesExplorerController'
        })
        .otherwise({
            redirectTo: '/explore'
        });
  });
