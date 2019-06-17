module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const { enhancement } = item;
  return { ...item };
}

function fail(item) {
  const { enhancement, durability } = item;
  if(enhancement > 16){
    return { ...item, enhancement: enhancement-1};
  }
}
//fail 

// If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
