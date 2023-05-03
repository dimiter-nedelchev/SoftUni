const { expect } = require('chai');
const rgbToHexColor= require('./06. RGB-to-Hex');

describe('Regular tests', ()=>{
    it('Should return undefined with array', ()=>{
        expect(rgbToHexColor([])).to.equal(undefined)
    });
    it('Should return undefined when first param is string', () => {
        expect(rgbToHexColor('Yes', 1 , 2)).to.equal(undefined)
    });
    it('Should return undefined when second param is string', () => {
        expect(rgbToHexColor(1, 'Yes' , 2)).to.equal(undefined)
    });
    it('Should return undefined when thir param is string', () => {
        expect(rgbToHexColor(1, 2, 'Yes')).to.equal(undefined);
    });
    it('Should return undefined when first num is out of range', ()=>{
        expect(rgbToHexColor(-1, 2, 3)).to.equal(undefined);
    });
    it('Should return undefined if first num is beyond range', () => {
        expect(rgbToHexColor(256, 2, 3)).to.equal(undefined);
    });
    it('Should return undefined when second num is out of range', ()=>{
        expect(rgbToHexColor(1, -2, 3)).to.equal(undefined);
    });
    it('Should return undefined if second num is beyond range', () => {
        expect(rgbToHexColor(1, 256, 3)).to.equal(undefined);
    });
    it('Should return undefined when third num is out of range', ()=>{
        expect(rgbToHexColor(1, 2, -3)).to.equal(undefined);
    });
    it('Should return undefined when third num is beyond of range', ()=>{
        expect(rgbToHexColor(1, 2, 256)).to.equal(undefined);
    });
    it('Should return color value', () => {
        expect(rgbToHexColor(1,2,3)).to.equal('#010203');
    });
    it('Should return undefined with 2 arguments', () => {
        expect(rgbToHexColor(1,2)).to.equal(undefined);
    });
    it('Should return undefined with one argument', ()=>{
        expect(rgbToHexColor(1)).to.equal(undefined);
    });
    it('Should return undefined with no arguments', () => {
        expect(rgbToHexColor()).to.equal(undefined);
    });
    it('Should return hex value', ()=>{
        expect(rgbToHexColor(10,30,50)).to.equal('#0A1E32')
    });
    it('Should return hex value with larger number',() => {
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF')
    });
    it('Should return hex value with minimal values', ()=>{
        expect(rgbToHexColor(0,0,0)).to.equal('#000000')
    });
})