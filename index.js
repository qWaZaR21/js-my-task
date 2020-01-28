function combination(str) {
  let length = str.length;
  let array = [];

  for (i = 0; i < length; i++){
    array.push(str[i]);
  }
  
  array.sort();

  result.push(array.toString());

  let count = factorial(length);

  while (count-1 > 0) {
    
    firstFlag = findFirstFlag(array);

    if (firstFlag+2 !== array.length) {
      secondFlag = findSecondFlag (array, firstFlag);
    } else {
      secondFlag = firstFlag+1;
    }

    swap(array, firstFlag, secondFlag);
    
    if (firstFlag + 2 !== array.length) {
      array = reverse(array, firstFlag);
    }
    
    result.push(array.toString());
    count--;
  }
}

function factorial(n) {
  return n === 1 ? n : n * factorial(n - 1);
}

function findFirstFlag(array) {
  let firstFlag;
  for (i = 0; i < array.length-1; i++) {
    if (array[i] < array[i+1]){
      firstFlag = i;
    }
  }

  return firstFlag;
}

function findSecondFlag(array, firstFlag) {
  let secondFlag;
  for (i = firstFlag+1; i < array.length; i++) {
    if (array[firstFlag] < array[i]){
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
}

function reverse(array, firstFlag) {

  let reverseArray;

  reverseArray = array.slice(firstFlag+1, array.length).reverse();
  array.splice(firstFlag+1, array.length-firstFlag+1);
  array = array.concat(reverseArray);

  return(array);
}


let result = [];
let str = "ь1$k8L";

combination(str);

console.log(result);


