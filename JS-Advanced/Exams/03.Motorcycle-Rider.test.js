const { expect } = require('chai');
const motorcycleRider= require('./Motorcycle Rider');


describe('Testing license restriction functionality', () => {
    it('Should return correct info with AM', () => {
        expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.')
    });
    it('Should throw an error with wrong input', ()=>{
        expect(() => {motorcycleRider.licenseRestriction('BN')}).to.throw('Invalid Information!');
    });
    it('Should throw an error with wrong data type', () => {
        expect(() => {motorcycleRider.licenseRestriction(4)}).to.throw('Invalid Information!');
    });
    it('Should return correct info with A', () => {
        expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.');
    });
    it('Should return correct info with A1', () => {
        expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.')
    });
    it('Should return correct info with A2', () => {
        expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.')
    });
});
describe('Test motorcycleShowroom', () => {
    it('Should test functionality', () => {
        expect(() => {motorcycleRider.motorcycleShowroom('s', 500)}).to.throw('Invalid Information!');
        expect(() => {motorcycleRider.motorcycleShowroom(['500', '600'], 's')}).to.throw('Invalid Information!');
        expect(() => {motorcycleRider.motorcycleShowroom([], 200)}).to.throw('Invalid Information!');
        expect(() => {motorcycleRider.motorcycleShowroom([500], -1)}).to.throw('Invalid Information!');
        expect(motorcycleRider.motorcycleShowroom([500, 600], 700)).to.equal("There are 2 available motorcycles matching your criteria!");
        expect(motorcycleRider.motorcycleShowroom([600], 400)).to.equal("There are 0 available motorcycles matching your criteria!");
        expect(motorcycleRider.motorcycleShowroom([49], 60)).to.equal('There are 0 available motorcycles matching your criteria!');
        expect(motorcycleRider.motorcycleShowroom([500, 500], 500)).to.equal(`There are 2 available motorcycles matching your criteria!`);
        expect(motorcycleRider.motorcycleShowroom([500, 600], 550)).to.equal('There are 1 available motorcycles matching your criteria!');
        expect(motorcycleRider.motorcycleShowroom([50, 30], 60)).to.equal('There are 1 available motorcycles matching your criteria!');
    });
});
describe('Test other spendings', () => {
    it('Should test functionality', () => {
        expect(() => {motorcycleRider.otherSpendings('s', ['engine oil'], false)}).to.throw('Invalid Information!');
        expect(() => {motorcycleRider.otherSpendings(['helmet'], 's', false)}).to.throw('Invalid Information!');
        expect(() => {motorcycleRider.otherSpendings(['helmet'], ['engine oil'], 's')}).to.throw('Invalid Information!');
        expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], false)).to.equal(`You spend $270.00 for equipment and consumables!`);
        expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], true)).to.equal(`You spend $243.00 for equipment and consumables with 10% discount!`);
        expect(motorcycleRider.otherSpendings(['jacked'], ['oil filter'], false)).to.equal(`You spend $330.00 for equipment and consumables!`);
        expect(motorcycleRider.otherSpendings(['jacked'], ['oil filter'], true)).to.equal(`You spend $297.00 for equipment and consumables with 10% discount!`)
    })
})