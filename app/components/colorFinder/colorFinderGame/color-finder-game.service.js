app.factory('colorFinderGameService', [function colorFinderGameService() {
    let defaultElementsInRow = 2;
    let defaultAttemptsLeft = 3;
    let defaultScore = 0;

    let fieldSize = 512;

    let currentElementsInRow = defaultElementsInRow;
    let currentAttemptsLeft = defaultAttemptsLeft;
    let currentScore = defaultScore;

    let defaultColor;
    let changedColor;


    let colorFinderModel = {
        setCurrentElementsInRow: function (elementsInRow) {
            currentElementsInRow = elementsInRow;
        },
        getCurrentElementsInRow: function () {
            return currentElementsInRow;
        },
        getCurrentAttemptsLeft: function () {
            return currentAttemptsLeft;
        },
        getCurrentScore: function () {
            return currentScore;
        },
        attemptFail: function () {
            if (currentAttemptsLeft > 0) {
                currentAttemptsLeft--;
                return currentAttemptsLeft;
            } else {
                this.reset();
                return currentAttemptsLeft;
            }
        },
        scoreAdd: function () {
            currentScore++;
            return currentScore;
        },
        getFieldSize: function () {
            return fieldSize;
        },
        getCurrentElementSize: function () {
            return fieldSize/currentElementsInRow;
        },
        calculateGameColors: function () {
            let red = Math.random();
            let green = Math.random();
            let blue = Math.random();
            defaultColor = new paper.Color(red, green, blue);
            changedColor = new paper.Color(red + (Math.random() * (0.1 - (-0.1) - 0.1)),
                green + (Math.random() * (0.1 - (-0.1) - 0.1)),
                blue + (Math.random() * (0.1 - (-0.1) - 0.1)));
        },
        getDefaultColor: function () {
            return defaultColor;
        },
        getChangedColor: function () {
            return changedColor;
        },
        reset: function () {
            currentMapSize = defaultMapSize;
            currentScore = defaultScore;
            currentAttemptsLeft = defaultAttemptsLeft;
        }

    };
    return colorFinderModel;
}]);