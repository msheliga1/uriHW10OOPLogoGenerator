// MJS 2.1.24 Circle Class jest testing. 
// Constructor Circle is imported.  
const Circle = require('../lib/circle.js');

// A testing suite for Circle is created.
  // check that new-render works correctly
  describe('Circle', () => {
    describe('render', () => {
      it('Render should only render the Circle, not the text inside of it', () => {
          const shape = new Circle("MJS", "blue", "red");
          expect(shape.render()).toEqual('<circle cx="150" cy="150" r="140" fill="red" />');
      });
    });
  });

    // check that new type is correct
    describe('Circle', () => {
        describe('new-typeOf', () => {
          it('new Circle shape.constructor.name should be Circle', () => {
              const shape = new Circle("MJS", "blue", "red");
              // typeOf shape returns "object"
              expect(shape.constructor.name).toEqual(`Circle`);
          });
        });
      });

    // check that new-log works correctly
    describe('Circle', () => {
        describe('new-log', () => {
          it('log should match values in new', () => {
              const shape = new Circle("MJS", "blue", "red");
              expect(shape.log()).toEqual(`Shape: Circle, Initials: MJS, Color: blue, bgColor: red`);
          });
        });
      });

// check that setInitials-getInitials works
describe('Circle', () => {
  describe('setColor(green) getColor()', () => {
    it('should set-get the initials of www (Uppercased!)', () => {
      const shape = new Circle("MJS", "blue", "red");
      shape.setInitials("www"); // note case auto-uppered
      expect(shape.getInitials()).toEqual("WWW");
    });
  });
});

// check that setColor-getColor works
describe('Circle', () => {
  describe('setColor(green) getColor()', () => {
    it('should set the color go green', () => {
      const shape = new Circle("MJS", "blue", "red");
      shape.setColor("green");
      expect(shape.getColor()).toEqual("green");
    });
  });
});

// check that setBGColor-getBGColor works
describe('Circle', () => {
  describe('setBCColor(green) getBGColor()', () => {
    it('should set the color go green', () => {
      const shape = new Circle("MJS", "blue", "red");
      shape.setBGColor("green");
      expect(shape.getBGColor()).toEqual("green");
    });
  });
});

