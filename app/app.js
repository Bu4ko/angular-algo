'use strict';

let app = angular.module('app', ['ui.router'

]);

app.config(function ($locationProvider, $stateProvider, $urlServiceProvider) {

    $locationProvider.hashPrefix('!');

    $urlServiceProvider.rules.otherwise({ state: 'initial' });

    $stateProvider.state('algoritmsList', {
        url: '/algoritmsList',
        component: 'algoritmsList',
        resolve: {
            algoritms: function (AlgoritmsService) {
                return AlgoritmsService.list();
            }
        }
    });

    $stateProvider.state('initial', {
        url: '/',
        component: 'initial',
    });
}).run(function($http, $templateRequest) {
    //$http.get('data/users.json', { cache: true });
});