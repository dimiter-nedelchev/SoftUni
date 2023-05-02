const assert= require('assert').strict;
const { expect } = require('chai');
const isSymmetric= require('./05.Check-for-Symmetry');

describe('Should check if input is an array', () => {
    it('Should be false', () => {
        expect(isSymmetric('Stamat')).to.be.false;
    });
});
describe('Should check if reversed array has the same valuea as initial', ()=>{
   it ('Odd', () => {
        expect(isSymmetric([1,2,1])).to.be.true;
});
});
describe('Should check if reversed array has a different value than initial', () =>{
    it('Odd', () => {
        expect(isSymmetric([3,2,1])).to.be.false;
    });
})
describe('Should check if reversed array has a different value than initial', () => {
    it('should return true on isSymmetric(["pesho",new Date(2016,8,15),false,new Date(2016,8,15), "pesho"])', () => {
        expect(isSymmetric(["pesho", new Date(2016, 8, 15), false, new Date(2016, 8, 15), "pesho"])).to.be.true;
    });
    it('should return false on isSymmetric(["pesho",new Date(2016,8,15),false,new Date(2016,8,15), "pesho"])', () => {
        expect(isSymmetric(["pesho", new Date(2016, 8, 15), false, "pesho"])).to.be.false;
    });
})

