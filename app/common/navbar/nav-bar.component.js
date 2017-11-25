'use strict';

function NavBarController(menuService) {
    let navBarCtrlCtrl = this;
}

NavBarController.$injector['menuService'];

angular.module('app').component('navbar', {
    controller: NavBarController,
    templateUrl: '/app/common/navbar/nav-bar.html'
});