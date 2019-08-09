' use strict'

// jshint expr: true

var chai = require('chai');
// expect = chai.expect;

chai.should();

isEven = (num) => num % 2 === 0
addNums = (num1,num2) => num1 + num2

describe("Is Even number", () => {
  it('should return true if is num is even', () => {
    isEven(4).should.equal(true);
  });
  it('should return false if is num is odd', () => {
    isEven(5).should.equal(false);
  });
});
describe('Add numbers',()=>{
  let num;
  beforeEach(()=>{
    num = 3
  })
  afterEach(()=>{

  })
  it("should sum of numbers ", () => {
    addNums(num, 4).should.equal(7);
  });
  it("should sum of numbers not concatenation ", () => {
    addNums(num, 4).should.not.equal(34);
  });
});
