

const { expect } = require('chai');
const rentCar= require('./03.Rent-Car.js.js');

describe('Test rentCar functionality', () => {
    it('Should test searCar method', () => {
        expect(() => {rentCar.searchCar('1', 'BMW')}).to.throw('Invalid input!');
        expect(() => {rentCar.searchCar(['BMW', 'Audi'], 1)}).to.throw('Invalid input!');
        expect(() => {rentCar.searchCar({'BMW': 25}, 'BMW')}).to.throw('Invalid input!');
        expect(() => {rentCar.searchCar(['BMW', 'Audi'], 'Mercedes')}).to.throw('There are no such models in the catalog!');
        expect(rentCar.searchCar(['BMW', 'Audi', 'BMW'], 'BMW')).to.equal(`There is 2 car of model BMW in the catalog!`);
        expect(rentCar.searchCar(['BMW', 'Audi'], 'BMW')).to.equal(`There is 1 car of model BMW in the catalog!`);

    })
    it('Should test calculatePriceOfCar method', () => {
        expect(() => {rentCar.calculatePriceOfCar('BMW', '1')}).to.throw('Invalid input!');
        expect(() => {rentCar.calculatePriceOfCar('BMW', 1.1)}).to.throw('Invalid input!');
        expect(() => {rentCar.calculatePriceOfCar(1, 1)}).to.throw('Invalid input!');
        expect(() => {rentCar.calculatePriceOfCar('Maybach', 1)}).to.throw('No such model in the catalog!');
        expect(rentCar.calculatePriceOfCar('BMW', 1)).to.equal(`You choose BMW and it will cost $45!`);
        expect(rentCar.calculatePriceOfCar('BMW', 2)).to.equal(`You choose BMW and it will cost $90!`);
    })
    it('Should test checkBudget functionality', () => {
        expect(() => {rentCar.checkBudget('1', 1, 1)}).to.throw('Invalid input!');
        expect(() => {rentCar.checkBudget(1, 1.1, 1)}).to.throw('Invalid input!');
        expect(() => {rentCar.checkBudget(1.1, 1, 1)}).to.throw('Invalid input!');
        expect(() => {rentCar.checkBudget(1, 1, 1.1)}).to.throw('Invalid input!');
        expect(() => {rentCar.checkBudget(1, '1', 1)}).to.throw('Invalid input!');
        expect(() => {rentCar.checkBudget(1, 1, '1')}).to.throw('Invalid input!');
        expect(rentCar.checkBudget(1,1,1)).to.equal(`You rent a car!`);
        expect(rentCar.checkBudget(1,1,2)).to.equal(`You rent a car!`);
        expect(rentCar.checkBudget(2,2,5)).to.equal(`You rent a car!`);
        expect(rentCar.checkBudget(2,2,4)).to.equal(`You rent a car!`);
        expect(rentCar.checkBudget(1,2,1)).to.equal('You need a bigger budget!');
        expect(rentCar.checkBudget(2,2,1)).to.equal('You need a bigger budget!');
    })
})
