const { expect } = require('chai');
const movieTheater= require('./03. Movie Theater');

describe('Testing movieTheater', () => {
    it('Should test ageRestriction functionality', () => {
        expect(movieTheater.ageRestrictions('G')).to.equal(`All ages admitted to watch the movie`);
        expect(movieTheater.ageRestrictions('PG')).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
        expect(movieTheater.ageRestrictions('R')).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
        expect(movieTheater.ageRestrictions('NC-17')).to.equal(`No one under 17 admitted to watch the movie`);
        expect(movieTheater.ageRestrictions('A')).to.equal(`There are no age restrictions for this movie`);
    });
    it('Should test moneySpent functionality', () => {
        expect(() => {movieTheater.moneySpent('-1',['Popcorn'], ['Soda'])}).to.throw("Invalid input");
        expect(() => {movieTheater.moneySpent(1,'Popcorn', ['Soda'])}).to.throw("Invalid input");
        expect(() => {movieTheater.moneySpent(1,['Popcorn'], 'Soda')}).to.throw("Invalid input");
        expect(movieTheater.moneySpent(2,['Nachos', 'Nachos', 'Nachos', 'Nachos', 'Nachos'], ['Soda'])).to.equal(`The total cost for the purchase with applied discount is 50.00`);
        expect(movieTheater.moneySpent(1,['Popcorn'], ['Soda'])).to.equal(`The total cost for the purchase is 22.00`);
    });
    it('Should test reservation functionality', () => {
        expect(() => {movieTheater.reservation('1', 2)}).to.throw("Invalid input");
        expect(() => {movieTheater.reservation([{rowNumber: 1, freeSeats: 7}], '2')}).to.throw("Invalid input");
        expect(movieTheater.reservation([{rowNumber: 1, freeSeats: 7}], 2)).to.equal(1);
        expect(movieTheater.reservation([{rowNumber: 1, freeSeats: 7}, { rowNumber: 2, freeSeats: 5 }], 2)).to.equal(2);
    })
})