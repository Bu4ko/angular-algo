'use strict';

function ColorFinderGameController($q, colorFinderGameService) {
    let ctrl = this;

    ctrl.fieldElements = [];

    ctrl.$onInit = function () {
        colorFinderGameService.reset();
        ctrl.livesLeft = colorFinderGameService.getCurrentAttemptsLeft();
        ctrl.setupGame();
        ctrl.fieldSize = colorFinderGameService.getFieldSize();
    };

    ctrl.setupGame = function () {
        paper.clear();
        paper.install(window);
        paper.setup('colorFinder');
        ctrl.drawGameField();
    };

    ctrl.drawGameField = function () {
        ctrl.removeElements();
        colorFinderGameService.calculateGameColors();
        let defaultColor = colorFinderGameService.getDefaultColor();
        let changedColor = colorFinderGameService.getChangedColor();
        let elementsInRow = colorFinderGameService.getCurrentElementsInRow();
        let elementSize = colorFinderGameService.getCurrentElementSize();
        ctrl.fieldElements = [];
        let [choosenElementI, choosenElementJ] =
            ctrl.chooseChangedElement(elementsInRow);
        for (let i = 0; i < elementsInRow; i++) {
            ctrl.fieldElements[i] = [];
            for (let j = 0; j < elementsInRow; j ++) {
                ctrl.fieldElements[i][j] = new paper.Path.Rectangle(
                    new paper.Point(i * elementSize, j * elementSize), elementSize);
                ctrl.fieldElements[i][j].strokeColor = 'black';
                if (i !== choosenElementI || j !== choosenElementJ) {
                    ctrl.fieldElements[i][j].fillColor = defaultColor;
                    ctrl.fieldElements[i][j].onMouseDown = function (event) {
                        ctrl.failClick();
                    };
                } else {
                    ctrl.fieldElements[i][j].fillColor = changedColor;
                    console.log(`size: ${elementsInRow} i: ${i} j: ${j}`);
                    ctrl.fieldElements[i][j].onMouseDown = function (event) {
                        ctrl.successClick();
                    }
                }
            }
        }
    };

    ctrl.successClick = function () {
        colorFinderGameService.setCurrentElementsInRow(
            colorFinderGameService.getCurrentElementsInRow() + 1);
        ctrl.drawGameField();
        ctrl.getLivesWithPromise();
    };

    ctrl.failClick = function () {
        let attemptsLeft = colorFinderGameService.attemptFail();
        if (attemptsLeft === 0) {
            ctrl.drawGameField();
        }
        ctrl.getLivesWithPromise();
    };

    ctrl.removeElements = function () {
        for (let i = 0; i < ctrl.fieldElements.length; i++) {
            for (let j = 0; j < ctrl.fieldElements[i].length; j ++) {
                ctrl.fieldElements[i][j].remove();
            }
        }
    };

    //Need this to update in digest cycle changes from paper.js watchers
    ctrl.getLivesWithPromise = function () {
        let promise = $q.defer();
        promise.resolve(colorFinderGameService.getCurrentAttemptsLeft());
        promise.promise.then(function(result) {
            ctrl.livesLeft = result;
        });
    };

    ctrl.chooseChangedElement = function (elementsInRow) {
        //up size to use last element in rand
        //size = size++;
        return [Math.floor(Math.random() * (elementsInRow - 0)),
            Math.floor(Math.random() * (elementsInRow - 0))];
    }

}

app.component('colorFinderGame', {
    controller: ['$q', 'colorFinderGameService', ColorFinderGameController],
    templateUrl: '/app/components/colorFinder/colorFinderGame/color-finder-game.html',
    require: {
        colorFinderPage: '^colorFinder'
    },
    bind: {

    }
});