app.factory('colorFinderService', [function colorFinderService() {
    let defaultBoxSize = 3;
    let defaultAttemptsLeft = 3;
    let defaultScore = 0;

    let currentBoxSize = defaultBoxSize;
    let currentAttemptsLeft = defaultAttemptsLeft;
    let currentScore = defaultScore;


    let colorFinderModel = {
        setCurrentBoxSize: function (boxSize) {
            currentBoxSize = boxSize;
        },
        getCurrentBoxSize: function () {
            return currentBoxSize;
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
        reset: function () {
            currentBoxSize = defaultBoxSize;
            currentScore = defaultScore;
            currentAttemptsLeft = defaultAttemptsLeft;
        }

    };
    return colorFinderModel;
}]);