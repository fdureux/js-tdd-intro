const assert = require('assert');
const Rectangle = require('../Rectangle');


describe('isSquare', () => {
    it ('determines if a rectangle is actually a square', () => {
        assert.ok(3,3), 'true';
        assert.ok(4,4), 'false';
    });
});

describe('getArea', () => {
    it ('determines the area of a rectangle', () => {
        const rectC = new Rectangle(13, 7);
        assert.strictEqual(rectC.getArea(), 91);
    });
});

describe('getPerimeter', () => {
        const rectD = new Rectangle(13, 7) ;
    it ('determines correctly the perimeter of a rectangle', () => {
        assert.strictEqual(rectD.getPerimeter(), 40);
    });
});