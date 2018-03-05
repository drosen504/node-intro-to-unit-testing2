'use strict';
const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('should return FizzBuzz when number is divisible by both 5 and 3', function() {
    const fizzBuzzNumbers = [0, 15, 30, 45];
    fizzBuzzNumbers.forEach(function(num) {
      expect(fizzBuzzer(num)).to.equal('fizz-buzz');
    });
  });
  it('should return Buzz when number is disible by 3', function() {
    const buzzNumbers = [-5, 10, 20, 25];
    buzzNumbers.forEach(function(num) {
      expect(fizzBuzzer(num)).to.equal('buzz');
    });
  });
  it('should return Fizz when number is divisible by 3', function() {
    const fizzNumbers = [-3, 6, 9, 12, 18];
    fizzNumbers.forEach(function(num) {
      expect(fizzBuzzer(num)).to.equal('fizz');
    });
  });
  it('should return a number when neither divisible by 3 or 5', function() {
    const numberNumbers = [-1, 2, 8, 11, 16];
    numberNumbers.forEach(function(num) {
      expect(fizzBuzzer(num)).to.equal(num);
    });
  });
  
  it('should raise error if args not numbers', function() {
    const badInputs = ['aasdfsd', null, false, 'z'];
    badInputs.forEach(function(num) {
      expect(function() {
        fizzBuzzer(num[0], num[1], num[3], num[2]);
      }).to.throw(Error);
    });
  });
});