function findOdd(A) {
  //happy coding!
  let map = new Map;

  for (let i = 0; i < A.length; i++) {
    if (!map.has(A[i])) {
      map.set(A[i], 1);
    } else {
      map.set(A[i], map.get(A[i]) + 1);
    }
  }
  
  console.log(map);

  let result;

  for (let entry of map) {
      if (entry[1]%2 == 1){
          result = entry[0];
      }; 
  }

  return result;
}

let A = [1,1,2,-2,5,2,4,4,-1,-2,5];
console.log(findOdd(A));

