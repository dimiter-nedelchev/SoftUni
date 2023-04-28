const { assert } = require('chai');
const sum= require('./04.Sum-of-Numbers');

describe('Sum of Numbers', () => {
    it('Should return sum of numbers in array', () => {
    
    let input= [1,2,3,4,5];
    let result= input.reduce((accumulator, current) => accumulator + current, 0);
    
    let actualSum= sum(input);
    
    assert.equal(result, actualSum);
})
it('Should parse strings into numbers', () => {
    let input= ['1','2','3','4','5'];
    let result= input.map(Number).reduce((accumulator, current) => accumulator + current, 0);
    
    let actualSum= sum(input);
    
    assert.equal(result, actualSum);
})
})
