// Constructor Triangle is imported.
const Triangle = require('../lib/triangle.js');

// A testing suite for Triangle is created.

  // check that new-render works correctly
  describe('Triangle', () => {
    describe('render', () => {
      it('Render should only render the triangle, not the text inside of it', () => {
          const shape = new Triangle("MJS", "blue", "red");
          expect(shape.render()).toEqual(`<polygon points="170, 5 330, 200 10, 200" fill="red"/>`);
      });
    });
  });

    // check that new type is correct
    describe('Triangle', () => {
        describe('new-typeOf', () => {
          it('new Triagnle TypeOf should be triangle', () => {
              const shape = new Triangle("MJS", "blue", "red");
              // typeOf shape return "object"
              expect(shape.constructor.name).toEqual(`Triangle`);
          });
        });
      });

    // check that new-log works correctly
    describe('Triangle', () => {
        describe('new-log', () => {
          it('log should match values in new', () => {
              const shape = new Triangle("MJS", "blue", "red");
              expect(shape.log()).toEqual(`Shape: Triangle, Initials: MJS, Color: blue, bgColor: red`);
          });
        });
      });

// check that setInitials-getInitials works
describe('Triangle', () => {
  describe('setColor(green) getColor()', () => {
    it('should set-get the initials of www (Uppercased!)', () => {
      const shape = new Triangle("MJS", "blue", "red");
      shape.setInitials("www");
      expect(shape.getInitials()).toEqual("WWW");
    });
  });
});

// check that setColor-getColor works
describe('Triangle', () => {
  describe('setColor(green) getColor()', () => {
    it('should set the color go green', () => {
      const shape = new Triangle("MJS", "blue", "red");
      shape.setColor("green");
      expect(shape.getColor()).toEqual("green");
    });
  });
});

// check that setBGColor-getBGColor works
describe('Triangle', () => {
  describe('setBCColor(green) getBGColor()', () => {
    it('should set the color go green', () => {
      const shape = new Triangle("MJS", "blue", "red");
      shape.setBGColor("green");
      expect(shape.getBGColor()).toEqual("green");
    });
  });
});


