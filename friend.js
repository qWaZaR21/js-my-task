function friend(friends){
    var positiveArr = friends.filter(function(friends) {
    return friends;
  });
  return positiveArr;
  }

  console.log(friend(["Ryan", "Kieran", "Mark"]));