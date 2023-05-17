const { expect } = require('chai');
const bookSelection= require('./03.Book-Selection');


describe('Test bookSelection object', () => {
    it('Should test isGenreSuitable functionality', () => {
        expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
        expect(bookSelection.isGenreSuitable('Thriller', 11)).to.equal(`Books with Thriller genre are not suitable for kids at 11 age`);
        expect(bookSelection.isGenreSuitable('Horror', 11)).to.equal(`Books with Horror genre are not suitable for kids at 11 age`);
        expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
        expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal(`Those books are suitable`);
        expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal(`Those books are suitable`);
    });
    it('Should test isItAffordable functionality', () => {
        expect(() => {bookSelection.isItAffordable('1', 1)}).to.throw("Invalid input");
        expect(() => {bookSelection.isItAffordable(1, '1')}).to.throw("Invalid input");
        expect(bookSelection.isItAffordable(2, 1)).to.equal("You don't have enough money");
        expect(bookSelection.isItAffordable(2, 2)).to.equal(`Book bought. You have 0$ left`);
        expect(bookSelection.isItAffordable(2, 3)).to.equal(`Book bought. You have 1$ left`);
    });
    it('Should test suitable titles functionality', () => {
        expect(() => {bookSelection.suitableTitles('title', 'action')}).to.throw("Invalid input");
        expect(() => {bookSelection.suitableTitles([{title: "One Punch Man", genre: "Action"}], ['action'])}).to.throw("Invalid input");
        expect(bookSelection.suitableTitles([{title: "One Punch Man", genre: "action"}], 'action')).to.be.an('array').that.includes("One Punch Man")
        expect(bookSelection.suitableTitles([{title: "One Punch Man", genre: "action"}], 'comedy')).to.deep.equal([]);
    })
})