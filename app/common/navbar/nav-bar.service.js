'use strict';

angular.module('app').factory('menuService', ['$state', function menuServiceFactory($state) {
    return {
        getStates: $state.get(),
        currentState: $state.current,
    }
}]);