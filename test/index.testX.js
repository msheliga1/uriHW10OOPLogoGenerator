// MJS 2.1.24 index.js jest testing. 
// Constructor Shape is imported.  
const Shape = require('../lib/shape.js');
const Index = require('../index.js');

// A testing suite for index.js is created.
  // check that new-render works correctly
  describe('Index', () => {
    describe('render', () => {
      it('Create a shape object', () => {
          const ans = {"name":"MJS", "color":"aqua", "bgColor":"pink", "shape":"circle"}
          const shape = Index.createShapeObject(ans);
          expect(shape.render()).toEqual('<circle cx="150" cy="150" r="140" fill="pink" />');
      });
    });
  });

    // check that new type is correct
    describe('Index', () => {
        describe('new-typeOf', () => {
          it('new Shape shape.constructor.name should be Shape', () => {
              const shape = new Shape("MJS", "blue", "red");
              // typeOf shape returns "object"
              expect(shape.constructor.name).toEqual(`Shape`);
          });
        });
      });

    // check that new-log works correctly
    describe('Index', () => {
        describe('new-log', () => {
          it('log should match values in new', () => {
              const shape = new Shape("MJS", "blue", "red");
              expect(shape.log()).toEqual(`Shape: Shape, Initials: MJS, Color: blue, bgColor: red`);
          });
        });
      });

// check that setInitials-getInitials works
describe('Index', () => {
  describe('setColor(green) getColor()', () => {
    it('should set-get the initials of www (Uppercased!)', () => {
      const shape = new Shape("MJS", "blue", "red");
      shape.setInitials("www"); // note case auto-uppered
      expect(shape.getInitials()).toEqual("WWW");
    });
  });
});

// check that setColor-getColor works
describe('Index', () => {
  describe('setColor(green) getColor()', () => {
    it('should set the color go green', () => {
      const shape = new Shape("MJS", "blue", "red");
      shape.setColor("green");
      expect(shape.getColor()).toEqual("green");
    });
  });
});

// check that setBGColor-getBGColor works
describe('Index', () => {
  describe('setBCColor(green) getBGColor()', () => {
    it('should set the color go green', () => {
      const shape = new Shape("MJS", "blue", "red");
      shape.setBGColor("green");
      expect(shape.getBGColor()).toEqual("green");
    });
  });
});

