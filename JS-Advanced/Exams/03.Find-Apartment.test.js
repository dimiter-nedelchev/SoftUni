const { expect } = require('chai');
const findNewApartment= require('./03.findApartment');

describe('Test functionality of findNewApartment', () => {
    it('Should test isGoodLocation functionality', () => {
        expect(() => {findNewApartment.isGoodLocation([], false)}).to.throw("Invalid input!");
        expect(() => {findNewApartment.isGoodLocation('Sofia', 1)}).to.throw("Invalid input!");
        expect(findNewApartment.isGoodLocation('Turnovo', true)).to.equal("This location is not suitable for you.");
        expect(findNewApartment.isGoodLocation('Varna', false)).to.equal("There is no public transport in area.");
        expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal("There is no public transport in area.");
        expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal("There is no public transport in area.");
        expect(findNewApartment.isGoodLocation('Varna', true)).to.equal("You can go on home tour!");
        expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal("You can go on home tour!");
        expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal("You can go on home tour!");
    })
    it('Should test isLargeEnough functionality', () => {
        expect(() => {findNewApartment.isLargeEnough('1', 1)}).to.throw("Invalid input!");
        expect(() => {findNewApartment.isLargeEnough([],1)}).to.throw("Invalid input!");
        expect(() => {findNewApartment.isLargeEnough([40, 50, 30], '1')}).to.throw("Invalid input!");
        expect(findNewApartment.isLargeEnough([40, 50], 40)).to.equal('40, 50');
        expect(findNewApartment.isLargeEnough([41, 50], 40)).to.equal('41, 50');
        expect(findNewApartment.isLargeEnough([30, 50], 40)).to.equal('50');
        expect(findNewApartment.isLargeEnough([30, 20], 40)).to.equal('');

    })
    it('Should test isItAffordable functionality', () => {
        expect(() => {findNewApartment.isItAffordable('1', 1)}).to.throw("Invalid input!");
        expect(() => {findNewApartment.isItAffordable(1, '1')}).to.throw("Invalid input!");
        expect(() => {findNewApartment.isItAffordable(0, 1)}).to.throw("Invalid input!");
        expect(() => {findNewApartment.isItAffordable(11, 0)}).to.throw("Invalid input!");
        expect(() => {findNewApartment.isItAffordable(11, -1)}).to.throw("Invalid input!");
        expect(() => {findNewApartment.isItAffordable(-11, 1)}).to.throw("Invalid input!");
        expect(findNewApartment.isItAffordable(10, 9)).to.equal("You don't have enough money for this house!");
        expect(findNewApartment.isItAffordable(10, 10)).to.equal("You can afford this home!");
        expect(findNewApartment.isItAffordable(10, 11)).to.equal("You can afford this home!");
    })
})