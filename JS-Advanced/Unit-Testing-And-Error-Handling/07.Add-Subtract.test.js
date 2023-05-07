const assert= require('assert').strict;
const { expect } = require('chai');
const createCalculator= require('./07.Add-Subtract');

describe('Check methods', () =>{
    it('Should add sum to Value', ()=>{
        
        expect(createCalculator()).to.be.an('object');
    })
    it('Should have add method', () => {
        expect(createCalculator()).to.have.property('add');
    });
    it('Should have subtract method', () => {
        expect(createCalculator()).to.have.property('subtract');
    });
    it('Should have get method', () => {
        expect(createCalculator()).to.have.property('get');
    });
    it('Should get value of add', () => {
        let test= createCalculator();
        test.add(5);
        expect(test.get()).to.equal(5)
    });
    it('Should get value of subtract', () => {
        let test= createCalculator();
        test.subtract(2);
        expect(test.get()).to.equal(-2);
    });
    it('Should work with both add and subtract', () => {
        let test= createCalculator();
        test.add(3);
        test.subtract(1);
        expect(test.get()).to.equal(2)
    });
    it('Should have a value of 0', ()=> {
        let test=createCalculator();
        expect(test.get()).to.equal(0)
    });
    it('Add should parse numbers', ()=> {
        let test= createCalculator();
        test.add('3');

        expect(test.get()).to.equal(3);
    });
    it('Subtract should parse number', () => {
        let test= createCalculator();
        test.subtract('1');

        expect(test.get()).to.equal(-1);
    });
})