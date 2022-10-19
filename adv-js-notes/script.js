//comment

//Prototype Notes
//Demonstration of Inheritance in JavaScript
function Plant () {
    this.country = "Mexico";
    this.isOrganic = true;
    }
    
    // Add the showNameAndColor method to the Plant prototype property
    Plant.prototype.showNameAndColor =  function () {
    console.log("I am a " + this.name + " and my color is " + this.color);
    }
    
    // Add the amIOrganic method to the Plant prototype property
    Plant.prototype.amIOrganic = function () {
    if (this.isOrganic)
    console.log("I am organic, Baby!");
    }
    
    function Fruit (fruitName, fruitColor) {
    this.name = fruitName;
    this.color = fruitColor;
    }
    
    // Set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.
    Fruit.prototype = new Plant ();
    
    // Creates a new object, aBanana, with the Fruit constructor
    var aBanana = new Fruit ("Banana", "Yellow");
    
    // Here, aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype:
    console.log(aBanana.name); // Banana
    
    // Uses the showNameAndColor method from the Fruit object prototype, which is Plant.prototype. The aBanana object inherits all the properties and methods from both the Plant and Fruit functions.
    console.log(aBanana.showNameAndColor()); // I am a Banana and my color is yellow.

//for loop
const todos = [
    'cleanroom',
    'brush teeth',
    'exercise',
    'study js',
    'eath healthy',
];

for (let i = 0; i < todos.length; i++) {
    console.log(i);
}
//forEach loop 
todos.forEach(function(i) {
    console.log(i);
})
//for todo list project, something to consider
let myToDoList = {
    pTitle: 'Daily',
}

myToDoList.task = {
    title : 'title',
    details : 'details',
    dueDate : 'dueDate',
}
console.log(myToDoList);
console.log(myToDoList.task);
console.log(myToDoList);

//DOM practice, shopping list
let button = document.getElementById('enter');
let input = document.getElementById('user-input');
let ul = document.querySelector('ul');

function inputLength() {
    return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	div.classList.add("wrapper");
	ul.appendChild(div);
	div.append(li, delButton);
	li.classList.add("taskClass");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	delButton.classList.add("delClass");
	delButton.innerHTML='Del';
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}
button.addEventListener('click', addListAfterClick);
 
input.addEventListener('keypress', addListAfterKeypress);

function doneTask(task) {
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}

function deleteListElement(element) {
	if (element.target.className === "delClass"){
		element.target.parentElement.remove();
	}
}

function handleUlClick (element) {
	doneTask(element);
	deleteListElement(element);
}

ul.addEventListener("click", handleUlClick)
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

//Ternary operator
//Condition (true/false) ? expression1 : expression2
function isUserValid(bool) {
    return bool;
}

let answer = isUserValid(true) ? 'You may enter' : 'Access denied';

function condition() {
    if (isUserValid(true)) {
        return 'You may enter';
    } else {
        return 'Access denied';
    }
}

var answer2 = condition();

//Switch Statement
function moveCommand(direction) {
    var whatHappens;
    switch(direction) {
        case 'forward': whatHappens = 'you encounter a monster';
        break;
        case 'back': whatHappens = 'you arrived home';
        break;
        case 'right': whatHappens = 'you found a river';
        break;
        case 'left': whatHappens = 'you run into a troll';
        break;
        default:
            whatHappens = 'please enter a valid direction';
    } return whatHappens;
} 

function winBattle(bool) {
    return bool;
}

let experiencePoints = winBattle(true) ? 10 : 1;

console.log(experiencePoints);

//Template Strigs, `backticks`
function greet(name = 'John', age = 30, pet = 'dogs') {
    return `Hello ${name}, you seem to be ${age-10} and your favorite animals are ${pet}!`;
}

console.log(greet('Denise', 25, 'monkeys'));

//Arrow Functions
/*function add(a, b) {
    return a + b;
}*/

const add = (a, b) => a + b;

//Closure
const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();
//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(5));
//Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

console.log(compose(sum, sum)(5));

// .map, forEach does actions throughout an array and return to 
//new array with .push, array.map needs to return a value in a variable.
const array = [1, 2, 10, 16,];
const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
})
console.log('forEach', double);
const mapArray = array.map((num) => {
    return num * 2;
})
//same as above with arrow functions
//onst mapArray = array.map(num => num *2);
console.log('map', mapArray);

// .filter, needs a return like map
const filterArray = array.filter(num => {
    return num > 5
})
//const filterArray = array.filter(num => num > 5);
console.log('filter', filterArray);

// .reduce 
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, /*accumulator starting number:*/ 5);
console.log('reduce', reduceArray);
// Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  ];
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
  let withEx = []
    array.forEach(user => {
    let { username } = user;
    username = username + '!';
    withEx.push(username);
  })
  console.log(withEx);
  //Create an array using map that has all the usernames with a "? to each of the usernames
  const mapArray = array.map((user) => {
    let { username } = user;
    return username + '?';
  })
  console.log(mapArray);
  //Filter the array to only include users who are on team: red
  const filterArray = array.filter((user) => {
    return user.team === 'red';
  })
  console.log(filterArray);
  //Find out the total score of all users using reduce
  // (1), what is the value of i?
  // (2), Make this map function pure:
  const arrayNum = [1, 2, 4, 5, 8, 9];
    const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})
  
  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
  const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer);
// class is similair to prototype
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}
console.log(new Player('John', 'Fighter'));
// prototype is similar to extends
class Wizard extends Player {
    constructor(name, type, gender, role) {
        super(name, type);
        this.gender = gender;
        this.role = role;
    }
    play() {
        console.log(`Weeeeeee I'm a ${this.type}`);
    }
}
const wizard1 = new Wizard('John', 'Fighter', 'Male', 'Frontline');
console.log(wizard1);
console.log(wizard1.introduce());

// .includes (ES7)
const cars = ['Toyota', 'Honda', 'Ford'];
console.log(cars.includes('Toyota'));
// returns true

// (ES8) 
Object.values
Object.entries
Object.keys
let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr. Grinch',
}
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})
Object.values(obj).forEach(value => {
    console.log(value);
})
Object.entries(obj).forEach(value => {
    console.log(value);
})
Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})
// returns (3) ['Santa0', 'Rudolf1', 'Mr. Grinch2']

// (ES10)
// .flat() can get rid of nested arrays and can also determine
// how many layers of arrays to flat'in
const array = [1, 2, [3, 4], 5];
array.flat();
console.log(array);
console.log(array.flat());
// .flatMap(), .trimStart(), .trimEnd(), 

//fromEntries
userProfiles = [
    ['commanderTom', 23], 
    ['derekZlander', 40], 
    ['hansel', 18],
];
console.log(Object.fromEntries(userProfiles));
console.log(Object.entries(userProfiles));

// Advanced Loops
const basket = ['apples', 'oranges', 'grapes'];
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}
basket.forEach(item => {
    console.log(item);
})
// Iterating over an array, going one by one and look at each item
for (fruits of basket) {
    console.log(fruits);
}
// for in loop works with objects, lets us see object properties
// Enumerating
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000,
};
for (fruits in detailedBasket) {
    console.log(fruits);
}
// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0
function biggestNumberInArray(arr) {
    let highest = 0;
    for (let i = 0; i < arr.length; i++) {
      if (highest < arr[i]) {
        highest = arr[i];
      }
    }
    return highest
  }
console.log(biggestNumberInArray(array));
function biggestNumberInArray2(arr) {
    let highest = 0;
    arr.forEach(item => {
        if (highest < item) {
            highest = item;
        }
    })
    return highest;
}
console.log(biggestNumberInArray2(array2));
function biggestNumberInArray3(arr) {
    let highest = 0;
    for (item of arr) {
      if (highest < item) {
        highest = item;
      }
    }
    return highest;
  }
console.log(biggestNumberInArray3(array3));

//LEARNING APIs
//https://api.giphy.com/v1/gifs/translate?api_key=xKkoxzLGlzTGBu6bMztCXmleIcTcslSR&s=rickandmorty


//example using .then, can also use .catch to handle errors
const img = document.querySelector('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=xKkoxzLGlzTGBu6bMztCXmleIcTcslSR&s=acid', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
});

//example using async and await, both methods are used for async code
const img = document.querySelector('img');

async function getAcidGIF() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=xKkoxzLGlzTGBu6bMztCXmleIcTcslSR&s=acid', {mode: 'cors'});
    const acidData = await response.json();
        img.src = acidData.data.images.original.url;
}

getAcidGIF();
