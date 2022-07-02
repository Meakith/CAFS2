class movie {
    constructor(name, year, director, budget, income) {
            this.name = name,
            this.year = year,
            this.director = director,
            this.budget = budget,
            this.income = income
    };

    getIntroduction() {
        return `Filmas ${this.name}, išleidimo metai ${this.year}, režisieriai - ${this.director}`;
    };

    getProfit() {
        return `Šio filmo pelnas yra  ${this.income - this.budget} dolerių.`
    };
    
};

const theMovie = new movie('Avengers-Endgame', 2019, 'Anthony and Joe Russo`s', 365000000, 2797800564);

console.log(theMovie.getIntroduction());
console.log(theMovie.getProfit());