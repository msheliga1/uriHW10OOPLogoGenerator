// Constructor Circle is imported.
const Circle = require('../lib/circle.js');

// A testing suite for Circle is created.
describe('Circle', () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe('sum', () => {
    it('should take two numbers and add them together', () => {
      const total = 4;
      const Circle = new Circle();
      expect(Circle.sum(2, 2)).toEqual(total);
    });
  });
});

// A testing suite for Circle is created.
describe('Circle', () => {
  // A test is created to check that the difference does in fact return the difference between the two numbers.
  describe('difference', () => {
    it('should take two numbers find the difference', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });
});

// A testing suite for Circle is created.
describe('Circle', () => {
  // A test is created to check that product does in fact return the two numbers multiplied together.
  describe('product', () => {
    it('should take two numbers and multiply them together', () => {
      const total = 4;
      const Circle = new Circle();
      expect(Circle.product(2, 2)).toEqual(total);
    });
  });
});

// A testing suite for Circle is created.
describe('Circle', () => {
  // A test is created to check that quotient does in fact return the quotient of the two numbers.
  describe('quotient', () => {
    it('should take two numbers and divide them', () => {
      const total = 1;
      const Circle = new Circle();
      expect(Circle.quotient(2, 2)).toEqual(total);
    });
  });
});
