// MJS 2.1.24 Shape Class jest testing. 
// Constructor Shape is imported.  
const Shape = require('../lib/shape.js');

// A testing suite for Shape is created.
  // check that new-render works correctly
  describe('Shape', () => {
    describe('render', () => {
      it('Render should only render the Shape, not the text inside of it', () => {
          const shape = new Shape("MJS", "blue", "red");
          expect(shape.render()).toEqual('Shape.render called, but you must render a specific shape (ie. circle, square, etc.)');
      });
    });
  });

    // check that new type is correct
    describe('Shape', () => {
        describe('new-typeOf', () => {
          it('new Shape shape.constructor.name should be Shape', () => {
              const shape = new Shape("MJS", "blue", "red");
              // typeOf shape returns "object"
              expect(shape.constructor.name).toEqual(`Shape`);
          });
        });
      });

    // check that new-log works correctly
    describe('Shape', () => {
        describe('new-log', () => {
          it('log should match values in new', () => {
              const shape = new Shape("MJS", "blue", "red");
              expect(shape.log()).toEqual(`Shape: Shape, Initials: MJS, Color: blue, bgColor: red`);
          });
        });
      });

// check that setInitials-getInitials works
describe('Shape', () => {
  describe('setColor(green) getColor()', () => {
    it('should set-get the initials of www (Uppercased!)', () => {
      const shape = new Shape("MJS", "blue", "red");
      shape.setInitials("www"); // note case auto-uppered
      expect(shape.getInitials()).toEqual("WWW");
    });
  });
});

// check that setColor-getColor works
describe('Shape', () => {
  describe('setColor(green) getColor()', () => {
    it('should set the color go green', () => {
      const shape = new Shape("MJS", "blue", "red");
      shape.setColor("green");
      expect(shape.getColor()).toEqual("green");
    });
  });
});

// check that setBGColor-getBGColor works
describe('Shape', () => {
  describe('setBCColor(green) getBGColor()', () => {
    it('should set the color go green', () => {
      const shape = new Shape("MJS", "blue", "red");
      shape.setBGColor("green");
      expect(shape.getBGColor()).toEqual("green");
    });
  });
});

