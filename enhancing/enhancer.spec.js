const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!


describe('enhancer', () => {
      describe('repair()', () => {
            it('restores durability to 100', () => {
                  expect(repair({ durability: 89 }).durability).toBe(100)
                  expect(repair({ durability: -89 }).durability).toBe(100)
                  expect(repair({ durability: 100 }).durability).toBe(100)
                  expect(repair({ durability: 0 }).durability).toBe(100)
            })
      });
      it.todo('should have a max durability value of 100');


      describe('fail()', () => {
            it('should ')
      });

      // describe('succeed()', () => {

      // });

      // describe('get()', () => {

      // });
})

//fail 

// If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).