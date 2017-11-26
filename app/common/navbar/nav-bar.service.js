'use strict';

angular.module('app').factory('navBarService',
    ['$state', function navBarServiceFactory($state) {
    return {
        getStates: $state.get(),
        currentState: $state.current,
    }
}]);