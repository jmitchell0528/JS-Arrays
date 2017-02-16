//Once you complete a problem, open up Chrome and check the answer in the console.


var arr = [10,20,30];
//Create a function named 'first' that is given 'arr' as the argument and  returns the first item in the given array.

  //Code Here
function first(arr) {
  var num = arr[0];
  return num;
}
first(arr);

//Next problem



var arr = [40,50,60];
//Create a function named 'last' that is given 'arr' as the argument and returns the last item in the given array.


  //Code Here
function last(arr) {
  return arr[2];
}
last(arr);

//Next Problem


var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];
//Create a function named 'looper' that is given family as it's only argument, loops through the given array, and alerts every item in the array.

  //Code Here
function looper(family) {
  for (var i = 0; i < family.length; i++)
  alert(family[i]);
}


//Next problem



var letters = ['A', 'B', 'C', 'D', 'E'];
//Write a function called reversedLooper that is given letters as it's only argument and loops through the given array backwards alerting every item in the array starting at the end.

  //Code Here
  function reversedLooper(letters) {
    for (var i = letters.length - 1; i >= 0; i--) {
    //or: for (var i = 4; i >= 0; i--)
    alert(letters[i]);
    }
  }

//Next Problem


var nums = [1,2,3,6,22,98,45,23,22,12];
//Write a function named evenFinder that is given nums as it's only argument and removes all values that aren't even from the given array.

  //Code Here
  var nums = [1,2,3,6,22,98,45,23,22,12];

  function evenFinder(arr) {
    var empty = []
    //for (var i = arr.length - 1; i >= 0; i--) { //<---- example is you want to start at the back of the nums array.
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        empty.push(arr[i]);

      }
    }
    return empty;
  }
  evenFinder(nums);


//Next problem


var numbersArray = [1,2,34,54,55,34,32,11,19,17,54,66,13];
//Write a function called divider that is given one argument, numbersArray.
//Have divider return an Array with the first item in the array being the evens array (all the even values from numbersArray) and the second item in the Array being the odds array (all the odd values from numbersArray).


//Code Here
  function divider(arr) {
    var even = [];
    var odd = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        even.push(arr[i]); //<---- push the new index from array into the "even" array.
      }
      else if (arr[i] % 2 !== 0) {
        odd.push(arr[i]);
      }
    }
    var result = [even, odd] //<----Array literal
    return result;
  }

  divider(numbersArray);


//Next Problem


var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
};
var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
//Above you're given a function that will return a random number between 0 and 30.  There is also a commented out array full of numbers to help you visualize what your function will be receiving.

// Your job is to write a function named finder that will get a random number (by invoking getRandomArbitrary), then loop through the array (that will be passed in as a parameter) to see if that random number is in the array. If it is, return true, if it's not, return false

  //Code Here
function finder(arr) {

    var result = getRandomArbitrary();
    //console.log(result); // <---- will log the number that is being compared to the random number
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === result) {
        return true;
        }

      }
      return false;

  }
  finder(numbers);
//Code Here


//Next problem



var str = 'this is my sentence';
//Write a function called reverse that takes a given str as it's only argument and returns that string after it's been reversed

  //Code Here
function reverse(str) {
  var newStr = str.split('').reverse();
  return newStr.join("");
}



//Next Problem


var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
/*
  Here we're going to write a function that mimics going shopping and checking things off of our grocery list,
  and adding new items to our list.

  Write a function called removeItem that is given two arguments, the first is myGroceryList, and the
  second is an item to remove from myGroceryList. If the second argument (or the item to add or remove) matches an item in myGroceryList,
  remove that item from the your grocery list and return the new, updated grocery list.

  Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList
  and the second is an item to add to your grocery list. In addItem add the item you passed in to
  myGroceryList then return the new, updated grocery list.

  In both the removeItem function and the addItem function, you will also need to check for valid aurguments. Specrunner will try to call your functions without passing in valid aurguments. When this happens, you will need to respond by returning an empty array.
*/

  //Code Here
function removeItem(list, item) {
  var newList = list.slice()
  for (var i = 0; i < list.length; i++) {
    if (list[i] === item) {
        newList.splice(i, 1);
        return newList;
    }
  }
  return newList;
}
function addItem(list, item) {
  var newList = list.slice()
    newList.push(item);
return newList
}
//removeItem(myGroceryList, 'chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
//addItem(myGroceryList, 'Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];



//Next Problem



//Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.

  //Code Here
function maker(arr) {
  var fill = [];
  for (var i = 1; i <= 215; i++) {
    fill.push(i); //<----just push i into the array 'fill'
  }
  return fill;
}



//Next Problem


var numbers = [5, '9', 16, 19, '25', '34', 48];
//Write a function called addTen that is given 'numbers' as it's only argument and returns a new
//array after adding ten to each item in numbers. *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]

  //Code Here
function addTen(arr) {

var list = [];
  for (var i = 0; i < arr.length; i++) {
    list.push(arr[i]/1 + 10); //<-----dividing by 1 turns the "string" numbers into numbers
  }
  return list;
}


//Next Problem



var num1 = Math.floor(Math.random() * (30 - 0) + 0);
var num2 = Math.floor(Math.random() * (30 - 0) + 0);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}
//Above is some code that adds a random number of values to both arr1 and arr2.
//Write a function called 'longer' that is given arr1 and arr2 as it's only arguments. Return the array which is longest.

  //Code Here
function longer(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return arr1;
  }
  else if (arr2.length > arr1.length) {
    return arr2;
  }
  else {
    return arr1;
  }
}

/*As a continuation of the previous problem, write another function called 'both'.
  Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example).
  'both' should return a new array with the matching numbers found in both arr1 and arr2.
  Example: var arr1 = [1,2,3,4]; var arr2 = [2,4,5,6]; newArray // [2,4]
*/

  //Code Here
  function both(arr1, arr2) {
    var newArr = [];

    for (var i = 0; i < arr1.length; i++) {
      //console.log(arr[i]);
      //console.log(arr2.indexOf(arr1[i]))
      if (arr2.indexOf(arr1[i]) !== -1) {
        newArr.push(arr1[i])
      }
      //console.log(newArr)
    }
    return newArr;
  }




//NEXT PROBLEM




var devMountainEmployees = [];

var tyler = {
    name: 'Tyler',
    position: 'Lead Instructor/Engineer',
    spiritAnimal: 'Honey Badger'
};

var cahlan = {
    name: 'Cahlan',
    position: 'CEO',
    spiritAnimal: 'butterfly'
};

var ryan = {
    name: 'Ryan',
    position: 'Marketing',
    spiritAnimal: 'fox'
};

var colt = {
    name: 'Colt',
    position: 'Everything really',
    spiritAnimal: 'Young Male Horse'
};

/*Above you're given an empty array with four objects. Fill the devMountainEmployees
array with those four objects. After that console.log the length of the Array and make
sure that it's equal to 4. */

  //Code Here
  devMountainEmployees.push(tyler, cahlan, ryan, colt);
/*Now let's say Cahlan has a mental breakdown and has to take a leave of absence to 'find himself'.
Loop through your devMountainEmployees until you find cahlan, then remove him from the array.*/

  //Code Here
devMountainEmployees = devMountainEmployees.filter(function(user) {
  if (user.name === "Cahlan") {
    return false;
  }
  else {
    return true;
  }
})



//NEXT PROBLEM




/*Now we're going to combine what we've learned today (objects) with what we learned
yesterday (arrays). Yeah, take a deep breathe. You're ready for this, promise.
Let's think back to our itunes example (tylermcginnis.com/itunes).
Notice that when you type in an artist name, iTunes gives us back a LOT of data.
What they're really giving us is an Array full of Objects. It probably looks something
like this. */

var data = [
    {
        artist: 'shakira',
        album: 'hips don\'t lie',
        tracks: 16
    },
    {
        artist: 'shakira',
        album: 'mariposa',
        tracks: 12
    },
    {
        artist: 'shakira',
        album: 'greatest hits',
        tracks: 19
    }
];



/*A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects)
of Data is to have an Array full of objects. */

//Create an empty array called users.

  //Code Here
  var users = [];

/*Now add three user objects to your users array. Each user object should contain the
following properties. name, email, password, username.*/

//include this as one of the objects in your array.
var user1 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis33@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniateLoop'
};

//Your Code Here
var user2 = {
  name: "Blah",
  email: "Naw",
  password: "Get",
  username: "hey"
};

var user3 = {
  name: "Blah",
  email: "Naw",
  password: "Get",
  username: "hey"
};

users.push(user1, user2, user3);

/*Now you have a very common data structure. Twitter is a good use case.
It's easy to imagine that your followers list on Twitter is an Array full or objects
and those objects contain properties about the specific person you follow.*/

/*Now let's say that Tyler decided to delete his account. Loop through your array of
objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him).
Once you find the particular index he's located in, delete him from the array.*/

  //Code Here
  users = users.filter(function(user) {
    if (user.email === "tylermcginnis33@gmail.com") {
      return false;
    }
    else {
      return true;
    }
  })

//The activity we just did is very much how data works in 'the real world'.
