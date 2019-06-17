const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!


describe('enhancer', () => {
      describe('repair()', () => {
            it('should restore durability to 100', () => {
                  expect(repair({ durability: 89 }).durability).toBe(100)
                  expect(repair({ durability: -89 }).durability).toBe(100)
                  expect(repair({ durability: 100 }).durability).toBe(100)
                  expect(repair({ durability: 0 })).toEqual({ durability:100 })
            })
      });

      // it.todo('should have a max durability value of 100');

      describe('succeed()', () => {
            it('should return the item with enhancement increased by 1', () => {
                  expect(succeed({ enhancement: 16, durability: 75 })).toEqual({ enhancement: 17, durability: 75 })
                  expect(succeed({ enhancement: 0, durability: 15})).toEqual({ enhancement: 1, durability: 15})
            })
            it('should return the item unchanged if the enhancement is already maxed at 20', () => {
                  expect(succeed({ enhancement: 20, durability: 75 })).toEqual({ enhancement: 20, durability: 75 })
            })
            
      });

      describe('fail()', () => {
            it('should return the item with enhancement decreased by 1 and durability decresed by 10 if the enhancement is over 16', () => {
                  expect(fail({ enhancement: 18, durability: 95 }).toEqual({ enhancement: 17, durability: 85 }))
            })
            it('should return the item with durability decreased by 5 if enhancement is under 15', () => {
                  expect(fail({ enhancement: 14, durability: 85 }).toEqual({ enhancement: 14, durability: 80 }))
            })
            it('should return the item with durabillity decreased by 10 if enhancement is over 15', () => {
                  expect(fail({ enhancement: 16, durability: 75 })).toEqual({ enhancement: 16, durability: 65 })
            })
      });

      

      // describe('get()', () => {
     
      // });
})

