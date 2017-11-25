'use strict';

let app = angular.module('app', ['ui.router'

]);

app.config(function ($locationProvider, $stateProvider, $urlServiceProvider) {

    //$locationProvider.hashPrefix('!');

    $urlServiceProvider.rules.otherwise({ state: 'initial' });

    $stateProvider.state('games', {
        url: '/games',
        abstract: true,
        template: '<ui-view/>',
    });

    $stateProvider.state('games.colorFinder', {
        url: '/colorFinder',
        component: 'colorFinder',
        // resolve: {
        //     algoritms: function (colorFinderService) {
        //         return colorFinderService.list();
        //     }
        // }
    });

    $stateProvider.state('initial', {
        url: '/',
        component: 'initial',
    });
}).run(function($http, $templateRequest) {
    //$http.get('data/users.json', { cache: true });
});