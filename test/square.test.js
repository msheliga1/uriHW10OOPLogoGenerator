// MJS 2.1.24 Square Class jest testing. 
// Constructor Square is imported.  
const Square = require('../lib/square.js');

// A testing suite for Square is created.
  // check that new-render works correctly
  describe('Square', () => {
    describe('render', () => {
      it('Render should only render the Square, not the text inside of it', () => {
          const shape = new Square("MJS", "blue", "red");
          expect(shape.render()).toEqual('<rect x="25" y="40" width="225" height="225" fill=" red " />');
      });
    });
  });

    // check that new type is correct
    describe('Square', () => {
        describe('new-typeOf', () => {
          it('new Square shape.constructor.name should be Square', () => {
              const shape = new Square("MJS", "blue", "red");
              // typeOf shape returns "object"
              expect(shape.constructor.name).toEqual(`Square`);
          });
        });
      });

    // check that new-log works correctly
    describe('Square', () => {
        describe('new-log', () => {
          it('log should match values in new', () => {
              const shape = new Square("MJS", "blue", "red");
              expect(shape.log()).toEqual(`Shape: Square, Initials: MJS, Color: blue, bgColor: red`);
          });
        });
      });

// check that setInitials-getInitials works
describe('Square', () => {
  describe('setColor(green) getColor()', () => {
    it('should set-get the initials of www (Uppercased!)', () => {
      const shape = new Square("MJS", "blue", "red");
      shape.setInitials("www"); // note case auto-uppered
      expect(shape.getInitials()).toEqual("WWW");
    });
  });
});

// check that setColor-getColor works
describe('Square', () => {
  describe('setColor(green) getColor()', () => {
    it('should set the color go green', () => {
      const shape = new Square("MJS", "blue", "red");
      shape.setColor("green");
      expect(shape.getColor()).toEqual("green");
    });
  });
});

// check that setBGColor-getBGColor works
describe('Square', () => {
  describe('setBCColor(green) getBGColor()', () => {
    it('should set the color go green', () => {
      const shape = new Square("MJS", "blue", "red");
      shape.setBGColor("green");
      expect(shape.getBGColor()).toEqual("green");
    });
  });
});

