'use strict';

function ColorFinderController($q, colorFinderService) {
    let colorFinderCtrl = this;

    colorFinderCtrl.$onInit = function () {
        paper.install(window);
        paper.setup('colorFinder');
    };
}

app.component('colorFinder', {
    controller: ['$q', 'colorFinderService', ColorFinderController],
    templateUrl: '/app/components/colorFinder/color-finder.html',
    bind: {

    }
});