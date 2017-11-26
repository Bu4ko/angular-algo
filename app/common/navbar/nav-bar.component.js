'use strict';

function NavBarController(navBarService) {
    let navBarCtrlCtrl = this;
}

angular.module('app').component('navbar', {
    controller: ['navBarService',NavBarController],
    templateUrl: '/app/common/navbar/nav-bar.html'
});