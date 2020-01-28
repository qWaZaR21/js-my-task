function combination(str) {
  let length = str.length;
  let array = [];
  let firstFlag;
  let secondFlag;

  for (i = 0; i < length; i++){
    array.push(str[i]);
  }
  
  array.sort();
  
  let count = 120;

  while (count != 0) {

    firstFlag = findFirstFlag(array);
    secondFlag = findSecondFlag (array, firstFlag);
    array = swap(array, firstFlag, secondFlag);

    if (firstFlag + 2 !== array.length) {
      array = reverse(array, firstFlag, secondFlag);
      result.push(array.toString());
    }

  }
}

function findFirstFlag(array) {
  let firstFlag;
  for (i = 0; i < length-1; i++) {
    if (array[i] < array[i+1]){
      firstFlag = i;
    }
  }
  return firstFlag;
}

function findSecondFlag(array, firstFlag) {
  let secondFlag;
  for (i = firstFlag+1; i < length; i++) {
    if (array[firstFlag] < array[i+1]){
      secondFlag = i;
    }
  }
  return secondFlag;
}

function swap(array, firstFlag, secondFlag) {
  let elem;

  elem = array[firstFlag];
  array[firstFlag] = array[secondFlag];
  array[secondFlag] = elem;
  
  return array;
}

function reverse(array, firstFlag) {

  let reverseArray;
  let newArray;

  reverseArray = array.slice(firstFlag+1, array.length).reverse();
  array.splice(firstFlag+1, array.length-firstFlag+1);
  newArray = array.concat(reverseArray);

  return newArray;
}




let result = [];

let str = "1fa8Qp";

combination(str);
console.log(result);




