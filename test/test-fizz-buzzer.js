const expect = require('chai').expect;

const fizzBuzz = require('../fizzBuzzer');

describe('fizzBuzz', function() {

	it('should return "fizz-buzz" for multiples of 15', function() {
		[15, 30, 45].forEach(function(input) {
			expect(fizzBuzz(input)).to.be.equal('fizz-buzz');
		});	
	});

	it('should return "buzz" for multiples of 5', function() {
		[5, 10, 25].forEach(function(input) {
			expect(fizzBuzz(input)).to.be.equal('buzz');
		});
	});

	it('should return "fizz" for multiples of 3', function() {
		[3, 9, 18].forEach(function(input) {
			expect(fizzBuzz(input)).to.be.equal('fizz');
		});
	});

	it('should return input if not mult of 3 or 5', function() {
		[1, 2, 4, 7].forEach(function(input) {
			expect(fizzBuzz(input)).to.be.equal(input);
		});
	});

	it('should produce error if input is not a number', function() {
		[true, false, 'cat'].forEach(function(input) {
			expect(function() {
          fizzBuzzer(input);
      }).to.throw(Error);
		});
	});
});