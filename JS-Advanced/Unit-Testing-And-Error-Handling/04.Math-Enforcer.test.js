const { expect } = require('chai');
const mathEnforcer= require('./04.Math-Enforcer');

describe('MathEnforcer', () => {
    describe('Add5', () => {
        it('Should return undefined when a string is passed', () => {
            expect(mathEnforcer.addFive('Hi')).to.equal(undefined);
        });
        it('Should return correct result w/h positive num', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it('Should return correct result with floating point num', ()=>{
            expect(mathEnforcer.addFive(2.05)).to.be.closeTo(7.05, 0.01);
        });
        it('Should return correct sum with negative num', ()=>{
            expect(mathEnforcer.addFive(-1)).to.equal(4);
        });
    });

    describe('Subtract 10', () => {
        it('Should return undefined when a string is passed', () => {
            expect(mathEnforcer.subtractTen('Hi')).to.equal(undefined);
        });
        it('Should return correct result with a positive num', () => {
            expect(mathEnforcer.subtractTen(11)).to.equal(1);
        });
        it('Should return correct result with negative num', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });
        it('Should return correct result with floating point', () => {
            expect(mathEnforcer.subtractTen(11.05)).to.be.closeTo(1.05, 0.01);
        });
    });

    describe('Sum', () => {
        it('Should return undefined when first param is not num', () => {
            expect(mathEnforcer.sum('hi', 1)).to.equal(undefined);
        });
        it('Should return undefined when second param is not num', () => {
            expect(mathEnforcer.sum(1, 'Hi')).to.equal(undefined);
        });
        it('Should return correct result with two positive nums', () => {
            expect(mathEnforcer.sum(5, 5)).to.equal(10);
        });
        it('Should return correct result with floating point num', () => {
            expect(mathEnforcer.sum(5, 2.05)).to.be.closeTo(7.05, 0.01);
        });
        it('Should return correct result with negative num', () => {
            expect(mathEnforcer.sum(5, -1)).to.equal(4);
        });
        it('Should return correct result with two negative nums', () => {
            expect(mathEnforcer.sum(-5, -5)).to.equal(-10);
        });
        it('Should return correct result with two floating point nums', () => {
            expect(mathEnforcer.sum(2.05, 2.05)).to.be.closeTo(4.1, 0.01);
        });
        it('Should return correct result with first floating num', () => {
            expect(mathEnforcer.sum(2.05, 5)).to.be.closeTo(7.05, 0.01);
        });
        it('Should return correct result with first negative num', () => {
            expect(mathEnforcer.sum(-1, 5)).to.equal(4);
        });
    });
});