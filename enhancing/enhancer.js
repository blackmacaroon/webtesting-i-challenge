module.exports = {
  repair,
  succeed,
  fail,
  get,
};

function repair(item) {
  return { ...item, durability: 100 };
}

function succeed(item) {
  const { enhancement } = item;
  if(enhancement < 20){
    return {...item, enhancement: enhancement + 1}
  }
  return { ...item };
}
//succeed
// The item's enhancement increases by 1.
// If the item enhancement level is 20, the enhancement level is not changed.
// The durability of the item is not changed.

function fail(item) {
  let { enhancement, durability } = item;

  if(enhancement > 16){
    return {
      ...item,
      enhancement: enhancement - 1,
      durability: durability - 10
    }
  } else if (enhancement >= 15) {
    return {
      ...item,
      durability: durability - 10
    }
  }
  return {...item, durability: durability - 5} 
}
//fail
// If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

function get(item) {
  return { ...item };
}

// Add a get() method to the enhancer object that takes an item and returns a new item with the name property modified according to the following rules:
// if the enhancement level is 0, the the name is not modified.
// if the enhancement level is greater than 0, change the name to include the enhancement level, preceded by a plus sign ( + ), between square brackets before the item's name. Example: the name of a "Iron Sword" enhanced to 7 would be "[+7] Iron Sword".