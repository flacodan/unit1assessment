// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) {
  let numsOverTen = [];
  for(const currentNum of numbers) {
    if (currentNum > 10) {
      numsOverTen.push(currentNum);
    }
  }
  return numsOverTen;
}

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) {
  const bWords = [];
  for(const word of words) {
    let wordFirst = word.charAt(0);
    if( wordFirst.toUpperCase() === 'B'){
      bWords.push(word);
    }
  }
  return bWords;
}

// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {
  for(let i = 0; i < additionalItems.length; i++) {
    originalArray.push(additionalItems[i]);
  }
  return originalArray;
}

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length) {
  const result = [];
  for(let i = 0; i < items.length; i++) {
    if(items[i].length === length) {
      result.push(items[i]);
    }
  }
  return result;
}

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {
  const oddItems = [];
  for(let i = 0; i < items.length; i++) {
    if(i%2 === 0) {
      oddItems.push(items[i]);
    }
  }
  return oddItems;
}

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {
  const wordIndex = [];
  for(let i = 0; i < words.length; i++) {
    if (words[i].charAt(0) === letter) {
      wordIndex.push(i);
    }
  }
  return wordIndex;
}

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {
  const smallList = [];
  smallList.push(items[0]);
  console.log(smallList);
  for(let i = 1; i < items.length; i++) {
    for(let s = 0; s < smallList.length; s++){
      if(Number(items[i]) > Number(smallList[s])) {
        smallList.splice(s, 1, items[i]);
        break;
      } 
    }
  }
  return smallList.slice(0, 2) //only return 'n' items
}

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {
  for(let i = 0; i < items.length; i++) {
    if (items[i] === value) {
      return i;
    }
  }
}

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {
  const numberList = [];
  let i = start;
  while (i <= stop) {
    numberList.push(i);
    i++;
  }
  return numberList;
}

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
