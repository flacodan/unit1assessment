// EXTRA CREDIT

// Return the strings common to both input arrays. Do not return duplicates.
// Ex.:
//   commonStrings(['a', 'b', 'c'], ['a', 'd', 'e']);
//   => ['a']
//   commonStrings(['zoo', 'space', 'zoo'], ['zoo', 'space', 'boat']);
//   => ['zoo', 'space']
function commonStrings(array1, array2) {
    const matchedStrings = [];
    for (let word of array1) {
        if (array2.includes(word)) {
          if (matchedStrings.includes(word)) {
            //skip
          } else {
            matchedStrings.push(word);
          }
        }
    }
  console.log(matchedStrings);
    return matchedStrings;
}

// Given three numbers, return a list of numbers from 1 to 100 that are
// divisible by at least one of a, b or c.
// Ex.:
//   divisibleByEither(50, 30, 29);
//   => [29, 30, 50, 58, 60, 87, 90, 100]
function divisibleByEither(a, b, c) {
    const divisible = [];
    for (let i = 1; i < 101; i++) {
        if ((i%a) === 0) {
            divisible.push(i);
        } else if ((i%b) === 0) {
            divisible.push(i);
        } else if ((i%c) === 0) {
            divisible.push(i);
        }
    }
    return divisible;
}

// Compress a string using the rules below and return the result. To compress a
// string, replace consecutive duplicate characters with a number and the
// character. For this compression, only count consecutive duplicate
// characters. If a character is not repeated, it should not be changed.
// Assume that all inputs are lowercased.
// Ex.:
//   compressString('aaa');
//   => '3a'
//   compressString('ssssbb');
//   => '4s2b'
//   compressString('ssssbbba');
//   => '4s3ba'
function compressString(string) {
    let newString = '';
    let currChar = string[1];
    let prevChar = string[0];
    let currCount = 1;
  
    for (let i = 1; i < string.length; i++) {
      currChar = string[i];
      if (currChar === prevChar) {
        currCount++;
      } else {
        if (currCount > 1) {
          newString += currCount + prevChar;
          currCount = 1;
        } else {
          newString += prevChar;
        }
      }
      prevChar = currChar;
    }
    if (currCount > 1) {
      newString += currCount + prevChar;
    } else {
      newString += currChar;
    }
    return newString;
  }

export { commonStrings, compressString, divisibleByEither };
