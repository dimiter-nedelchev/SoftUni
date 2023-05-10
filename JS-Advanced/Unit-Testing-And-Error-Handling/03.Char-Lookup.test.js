const { expect } = require('chai');
const lookupChar= require('./03.Char-Lookup');

describe('Check invalid inputs', () => {
    it('Should return undefined with array instead of string', () => {
        expect(lookupChar(['Strng'], 5)).to.equal(undefined);
    });
    it('Should return undefined when string is passed as index', () => {
        expect(lookupChar('Hi','there')).to.equal(undefined);
    });
    it('Should return undefined with floating number', () =>{
        expect(lookupChar('Hi', 2.4)).to.equal(undefined);
    });
    it('Should return undefined with negative index', () => {
        expect(lookupChar('Hi', -1)).to.equal('Incorrect index');
    });
    it('Should return undefined if index is outside range', () => {
        expect(lookupChar('Hi', 2)).to.equal('Incorrect index');
    });
});
describe('Check valid inputs', () => {
    it('Should return correct result', ()=>{
        expect(lookupChar('Hi', 1)).to.equal('i');
    });
});