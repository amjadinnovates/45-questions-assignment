/* Task 1 */

console.log("Installed Node.js, Typescript and VS code successfully\n");

/* Task 2  */

let _name: string = "Muhammad Amjad";
console.log("Hello", _name, "would you like to have some pizza\n");

/* Task 3*/

let Name: string = "EnginEEr rAnA MuhAmmAd aMjad";
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
console.log(
  Name.toLowerCase()
    .split(" ") // jahan space aengi split name k saray words wahan se split karega or array me convert karega
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) //jo words split hote ja rhe hen unko map func k zarye transform karta jaega, map me arrow function as callback use kiya hua hai.
    .join(" ") //joins the array elements to form a string
);

/* Task 4*/

console.log(
  "Muhammad Ali Jinnah once said," +
    ' "Think 100 times before you take a decision, But once that decision is taken, stand by it as one man."'
);

/* Task 5*/

let famous_person: string = "Muhammad Ali Jinnah";
let message: string =
  ' once said "Think 100 times before you take a decision, But once that decision is taken, stand by it as one man."';
console.log(famous_person + "," + message);

/*task 6*/
let _Name: string = "\t Muhammad Amjad\n";
console.log(_Name);

console.log(_Name.trim()); //trim remove all white spaces from ends of string

/*task 7 , 8*/

console.log(4 + 4);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);

/*task 9*/

let favNum: number = 5576;
let msg = "My favourite number is " + favNum;
console.log(msg);

/*task 10*/

// I have use below code to convert a name string to title case string
// learned few new methods like map(), charAt(), slice(), split() and join()
let str = "SaDaQat Ali Siddiqui";
console.log(
  str
    .toLowerCase()
    .split(" ") // jahan space aengi split name k saray words wahan se split karega or array me convert karega
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) //jo words split hote ja rhe hen unko map func k zarye transform karta jaega, map me arrow function as callback use kiya hua hai.
    .join(" ")
);

/*task 11*/

let my_frnds: string[] = ["Sheharyar", "Annus", "Muneeb", "Raza"];
for (let i = 0; i < my_frnds.length; i++) {
  console.log(my_frnds[i]);
}

/*task 12*/

function greet(x: string[]) {
  let greet = "Hello ";
  for (let i = 0; i < my_frnds.length; i++) {
    console.log(greet + my_frnds[i]);
  }
}
greet(my_frnds);

/*task 13*/

let motorCycle: string[] = ["Honda 125cc ", "Yamaha YBR ", "Suzuki 150cc "];
let statement = ["I want to ride ", "I hate to have ", "I want to burn a "];

for (let i = 0; i < motorCycle.length; i++) {
  console.log(statement[i] + motorCycle[i]);
}

/*task 14*/

let Invite_list: string[] = ["Sheharyar", "Annus", "Muneeb"];
let invite = " You are invited to dinner at my place ";

for (let i = 0; i < Invite_list.length; i++) {
  console.log(Invite_list[i] + invite);
}

/*task 15*/

console.log("\nMr. " + Invite_list[2] + " will not be able to join us\n");
Invite_list[2] = "Raza";
for (let i = 0; i < Invite_list.length; i++) {
  console.log(Invite_list[i] + invite);
}

/*task 16*/

console.log(
  "\nI have ordered a bigger table guys, inviting more people. We will have fun.\n"
);
Invite_list.unshift("Najeeb");
Invite_list.push("Jamshed");
Invite_list.splice(2, 0, "Tariq");

for (let i = 0; i < Invite_list.length; i++) {
  console.log(Invite_list[i] + invite);
}

/*task 17*/

console.log(
  "\nSorry guys dinner table did not arrive on time, i can accomodate 2 guests only\n"
);
for (let i = 0; i <= Invite_list.length; i++) {
  console.log(Invite_list.pop() + " Sorry you are not invited.");
}
// console.log(Invite_list);
// console.log(Invite_list.length);
for (let i = 0; i < Invite_list.length; i++) {
  console.log(Invite_list[i] + invite);
}
Invite_list.splice(0, 2);
console.log(Invite_list);

/*task 18*/

const fav_places: string[] = [
  "Kashmir",
  "Astore",
  "Makkah",
  "venice",
  "Madinah",
];
console.log("original order\t", fav_places);
let duplicate_arr = fav_places.slice(0);
console.log("alphabet order\t", duplicate_arr.sort());
console.log("original order\t", fav_places);
let duplicate_Revarr = [];
for (let i = 0; i < fav_places.length; i++) {
  duplicate_Revarr.unshift(duplicate_arr.shift());
}
console.log("Reverse order\t", duplicate_Revarr);
console.log("original order\t", fav_places);
console.log("original rev\t", fav_places.reverse());
console.log("original again\t", fav_places.reverse());
fav_places.sort();
console.log("original sorted\t", fav_places);
fav_places.reverse();
console.log("revrse sorted\t", fav_places);

/*Task 19*/
console.log(Invite_list.length);

/*task 20*/

let cities: string[] = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Chiniot",
  "Faislabad",
];

/*task 21*/

interface Shoes {
  brand: string;
  size: number;
  Color: string;
}

const attire: Shoes = {
  brand: "Sputnik",
  size: 41,
  Color: "brown",
};

console.log(
  "Amjad likes to wear ",
  attire.brand,
  " his shoe size is ",
  attire.size,
  ". He has ordered shoes in ",
  attire.Color,
  "color."
);

/*task 22*/

console.log(cities[11]);

/*task 23*/

let identity: number = 1190;
console.log("Is identity==1190 true? i guess it is true");
console.log(identity == 1190);
console.log("Is identity===1190 true? i guess it is true");
console.log(identity === 1190);
console.log("Is identity != 1190 true? i guess it is false");
console.log(identity != 1190);
console.log("Is identity<1190 true? i guess it is false");
console.log(identity < 1190);
console.log("Is identity<=1190 true? i guess it is true");
console.log(identity <= 1190);
console.log("Is identity>=1190 true? i guess it is true");
console.log(identity >= 1190);
console.log("Is identity>1190 true? i guess it is false");
console.log(identity > 1190);
console.log("Is typeofidentity==number true? i guess it is true");
console.log(typeof identity == "number");
console.log("Is typeofidentity!=number true? i guess it is false");
console.log(typeof identity != "number");
console.log(
  "Is typeofidentity==number & identity/1190==0true? i guess it is false"
);
console.log(typeof identity == "number" && identity / 1190 == 0);

/*task 24*/

let x: number = 11;
let strng: string = "BABAJEE";
console.log('Is strng=="BABAJEE" true? i guess it is true');
console.log(strng == "BABAJEE");
console.log('Is strng!="BABAJEE" true? i guess it is false');
console.log(strng != "BABAJEE");
console.log('Is strng!="babajee" true? i guess it is true');
console.log(strng != strng.toLowerCase());
console.log('Is strng=="babajee" true? i guess it is false');
console.log(strng == strng.toLowerCase());
console.log("Is x==11 true? i guess it is true");
console.log(x == 11);
console.log("Is x != 11 true? i guess it is false");
console.log(x != 11);
console.log("Is x<11 true? i guess it is false");
console.log(x < 11);
console.log("Is x<=11 true? i guess it is true");
console.log(x <= 11);
console.log("Is x>=11 true? i guess it is true");
console.log(x >= 11);
console.log("Is x>11 true? i guess it is false");
console.log(x > 11);
console.log("Is x>11 OR x==11 true? i guess it is true");
console.log(x > 11 || x == 11);
console.log("Is x>11 AND x==11 true? i guess it is false");
console.log(x > 11 && x == 11);
const array: number[] = [1, 2, 3, 4, 5];
console.log("Is 2 in the array ? i guess it is true");
console.log(array.indexOf(2) != -1);
console.log("Is 2 not in the array ? i guess it is false");
console.log(array.indexOf(2) == -1);

/*task 25*/
/*task 29*/

let favourite_fruits = ["banana", "apple", "orange"];
if (favourite_fruits.indexOf("apple") != -1) {
  // i.e 1 != -1 hence true
  console.log("You really love apples");
}
if (favourite_fruits.indexOf("pomegranate") != -1) {
  // i.e -1 != -1 hence false
  console.log("You really love pomegranate");
}
if (favourite_fruits.indexOf("banana") != -1) {
  // i.e 0 != -1 hence true
  console.log("You really love bananas");
}
if (favourite_fruits.indexOf("orange") != -1) {
  // i.e 2 != -1 hence true
  console.log("You really love oranges");
}
if (favourite_fruits.indexOf("grape") != -1) {
  // i.e -1 != -1 hence false
  console.log("You really love grapes");
}

/*task 30*/
let userList = ["Amjad", "Annus", "Admin", "Sheharyar", "Muneeb"];
for (let i = 0; i < userList.length; i++) {
  if (userList[i] == "Admin") {
    console.log("Welcome Admin, would you like to see the status report?.");
  } else {
    console.log("Hello! ", userList[i], " thak you for logging in again.");
  }
}
/*task 31*/

let userList2 = [];
if (userList2.length == 0) {
  console.log("We need to find some users.");
} else {
  for (let i = 0; i < userList.length; i++) {
    if (userList[i] == "Admin") {
      console.log("Welcome Admin, would you like to see the status report?.");
    } else {
      console.log("Hello! ", userList[i], " thak you for logging in again.");
    }
  }
}

/*task 32*/
let user_list = ["Amjad", "Annus", "Admin", "Sheharyar", "Muneeb"];
let new_user_list = ["amjad", "Zulfiqar", "Yasir", "ANNUS", "najeeb"];

for (let h = 0, i = 0; i < new_user_list.length; i++) {
  for (let j = 0; j < user_list.length; j++) {
    if (new_user_list[i].toLowerCase() === user_list[j].toLowerCase()) {
      console.log(
        "Dear! ",
        new_user_list[i],
        " You need to enter a new user name"
      );

      h = j;
      break;
    }
  }
  if (new_user_list[i].toLowerCase() === user_list[h].toLowerCase()) {
  } else {
    console.log("User name ", new_user_list[i], " is available");
  }
}

/*task 33*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 1) {
    console.log("1st\n");
  } else if (numbers[i] === 2) {
    console.log("2nd\n");
  } else if (numbers[i] === 3) {
    console.log("3rd\n");
  } else if (numbers[i] === 4) {
    console.log("4th\n");
  } else if (numbers[i] === 5) {
    console.log("5th\n");
  } else if (numbers[i] === 6) {
    console.log("6th\n");
  } else if (numbers[i] === 7) {
    console.log("7th\n");
  } else if (numbers[i] === 8) {
    console.log("8th\n");
  } else if (numbers[i] === 9) {
    console.log("9th");
  }
}
/*Task 34*/

let pizza = ["Pepperoni", "Fajita", "Afghani"];
for (let h = 1, i = 0; i < pizza.length; i++, h++) {
  console.log("In pizza my choice number", h, "is always", pizza[i]);
}
console.log("I really love pizza.");

/*Task 35 */
let pets = ["Dog", "Cat", "Goat", "Rabbit"];
for (let i = 0; i < pets.length; i++) {
  if (pets[i] === "Dog") {
    console.log("\nPet dogs will always second you in a fight");
  } else if (pets[i] === "Cat") {
    console.log("Home is not a home without Cat's purr ");
  } else if (pets[i] === "Goat") {
    console.log("If you have a goat, life is always calmer without tension. ");
  } else if (pets[i] === "Rabbit") {
    console.log(
      "If you pet a pair of rabbit, then buy a bigger house coz they will multiply fast."
    );
  }
}
console.log("Any of above animals would make a great pet.");

/*task 36*/

function Make_Tshirt(size: string, message: string) {
  console.log(
    "A T-shirt with",
    size,
    'size has the message "',
    message,
    '" printed at its back.'
  );
}

Make_Tshirt("XL", "Country Roads... Take me home...");

/*task 37*/

function make_Tshirt(size = "Large", message = "I love typescript") {
  console.log("make a", size, "shirt with", message, "printed on it");
}
make_Tshirt();
make_Tshirt("medium");
make_Tshirt("XXL", "I hate C#...naah");

/*task 38*/
function describe_city(city: string, country = "Pakistan") {
  console.log(city, "is in", country);
}
describe_city("Karachi");
describe_city("Hyderabad");
describe_city("Mumbai", "India");

/*task 39*/
function city_country(city: string, country: string): string {
  return city + ", " + country;
}
console.log(city_country("karachi", "pakistan"));
console.log(city_country("lahore", "pakistan"));
console.log(city_country("Madinah", "Saudia"));

/*task 40*/
interface Album {
  artist: string;
  title: string;
  tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
  let album: Album = {
    artist: artist,
    title: title,
  };

  if (tracks !== undefined) {
    album.tracks = tracks;
  }

  return album;
}

// Create three albums without specifying number of tracks
let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2");
let album3 = make_album("Artist3", "Album3");

// Create an album with the number of tracks specified
let album4 = make_album("Artist4", "Album4", 12);

// Print each album object
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);

/*Task 41*/
let magicians: string[] = ["Annus", "Amjad", "Sheharyar", "Bilal"];
function show_magicians(array: string[]) {
  for (let i = 0; i < array.length; i++) {
    console.log(magicians[i]);
  }
}
show_magicians(magicians);

/*Task 42*/
function make_great(array: string[]): string[] {
  for (let i = 0; i < array.length; i++) {
    magicians[i] = ["The great "] + magicians[i];
  }
  let modArray: string[] = magicians;

  return modArray;
}
console.log(make_great(magicians));

/*Task 43*/

let Magicians: string[] = ["Annus", "Amjad", "Sheharyar", "Bilal"];
let Great_magicians: string[] = Magicians.slice(0);

function Make_great(array: string[]): string[] {
  for (let i = 0; i < array.length; i++) {
    Great_magicians[i] = ["The great "] + Great_magicians[i];
  }

  return Great_magicians;
}

function Show_magicians(array: string[]) {
  for (let i = 0; i < array.length; i++) {
    console.log(Magicians[i]);
  }
  console.log(Magicians);
}
Show_magicians(Magicians);
console.log(Make_great(Great_magicians));

/*Task 44*/
function make_sandwitch(array: string[]) {
  console.log(array);
}

make_sandwitch(["pepperoni", "olives", "onions", "pepper", "boiled egg"]);
make_sandwitch(["biled egg", "mushrooms", "olives", "fish"]);
make_sandwitch(["chicken", "onions", "potato", "BBQ sauce", "Mayonaise"]);

/*Task 45*/
function make_car(
  manufacturer: string,
  model: string,
  ...options: [string, any][]
): Object {
  let car = { manufacturer, model };
  options.forEach(([key, value]) => (car[key] = value));
  return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
