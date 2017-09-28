class GuessingGame {
    constructor() {
        this.upperLimit = NaN;
        this.lowerLimit = NaN;
        this.currentGuess = NaN;
    }

    setRange(min, max) {
        this.upperLimit = max;
        this.lowerLimit = min;
    }

    guess() {
        this.currentGuess = Math.round(this.lowerLimit + (this.upperLimit - this.lowerLimit)/2);
        console.log("предполагаю " + this.currentGuess);
        return(this.currentGuess);
    }

    lower() {
        this.upperLimit = this.currentGuess;
    }

    greater() {
        this.lowerLimit = this.currentGuess;
    }
}

module.exports = GuessingGame;
