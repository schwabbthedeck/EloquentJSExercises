// the sum of a range
function range(start, end, step) {
  var array = [];
  if (start > end) {
    if (!step) step = -1;
    while (start >= end) {
      array.push(start);
      start += step;
    }
  } else {
    if (!step) step = 1;
    while (start <= end) {
      array.push(start);
      start += step;
    }
  }
  
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

//console.log(sum(range(1, 10)));


// reversing an array
function reverseArray(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

//console.log(reverseArray(["A","B","C"]));

function reverseArrayInPlace(array) {
  var loopLength = Math.floor(array.length/2);
  for (var i = 0; i < loopLength; i++) {
    var temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
}
var arrayValue = [1,2,3,4,5,7,8,9];
reverseArrayInPlace(arrayValue);
//console.log(arrayValue);


// A list
// example list variable: 
// var list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null }}};
function arrayToList(array) {
  var list = { value: array[(array.length - 1)], rest: null };
  for (var i = array.length - 2; i >= 0; i--) {
    list = {value: array[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

function nth(list, number) {
  var array = listToArray(list);
  return array[number];
}

//console.log(arrayToList([10,20]));
//console.log(listToArray(arrayToList([10,20,30])));
//console.log(prepend(10, prepend(20, null)));
//console.log(nth(arrayToList([10,20,30]),1));


// Deep Comparison
function deepEqual(obj1, obj2) {
  // check first that object have the same count of properties
  if (Object.keys(obj1).length != Object.keys(obj2).length) {
    return false;
  }

  for (var key in obj1) {
    // make sure both objects have the key
    if (!obj2.hasOwnProperty(key)) {
      return false;
    } else {
      // check if the values are an object
      if (typeof obj1[key] == "object" && obj1[key] != null && typeof obj2[key] == "object" && obj2 != null) {
        // if both are objects call deep compare
        if (!deepEqual(obj1[key], obj2[key])) {
          // if false return false
          return false;
        }
      } else {
        // they aren't objects do normal compare
        // only return if false
        if (obj1[key] === obj2[key]) {
          // if true continue and do nothing
        } else {
          // not equal return false
          return false;
        }
      }
    }
  }

  // nothing was false so return true
  return true;
}

var obj = { here: { is: "an" }, object: 2 };
// console.log(deepEqual(obj, obj));
// console.log(deepEqual(obj, { here: 1, object: 2 }));
// console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));