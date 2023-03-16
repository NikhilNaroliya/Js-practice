// set 4 questions practice

// Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.

// getMaxElement=(arr=[],length)=>{
//   max=0;
//   for(let i=0;i<arr.length;i++)
//    {
//       if(arr[i]>max)
//        max=arr[i];
//    }
//    return max;
// }


// let array = [4,78,8,3,6,0,12,34]
// console.log(getMaxElement(array,array.length)) // 78

// write an ES6 function that takes an array of numbers and converts even numbers to odd numbers by adding 1 to that number

// Your ES6 code here

// const convertEvenToOdd=(arr=[],length)=>{
  

//   for(let i=0;i<length;i++)
//    {
//     if(arr[i]%2==0)
//      {
//       arr[i]=arr[i]+1
//      }
//    }
   
//    console.log(arr)
// }

// let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// convertEvenToOdd(numArr,numArr.length)
// // [1, 3, 3, 5, 5, 7, 7, 9, 9]


//---4------
//write an ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.

// Your ES6 code here

// filterWords=(arr=[],length)=>{
//    let dummy=[]
// for(let i=0;i<length;i++)
//   {
//     if(arr[i].length>5)
//      dummy.push(arr[i])
//   }
// return dummy
// }

// var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
// console.log(filterWords(words,words.length)) // ["repeat", "community"]

//-------5--------

// 2. Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.

// Your ES6 code here

// const capitalizeWords=(arr=[])=>{
//  for(let i=0;i<arr.length;i++)
//   {
//     arr[i]=arr[i].toUpperCase()
//   }
//   return arr
// }
// console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]))
// // ["EAT", "SLEEP", "CODE", "REPEAT"]

//--------6----------
//Write an ES6 function that takes an array of objects and a property name and returns a new array with only the values of that property. Avoid using in-built methods.

// Your ES6 code here



// const getValues=(obj=[],size)=>
// {
  
//   let arr=[]
//    for(let i=0;i<size;i++)
//     {
//       arr.push(obj[i].name)
//     }
//     return arr
// }
// console.log(
//   getValues(
//     [
//       { name: "John", age: 21 },
//       { name: "Mary", age: 22 },
//       { name: "Peter", age: 23 },
//     ],
//     3
//   )
// ); // ["John", "Mary", "Peter"]

// ---------7---------

// 2. Write an ES6 function that takes the users' details and returns the data with team ID. Avoid using in-built methods.

// Your ES6 code here


// const podAndTeamAllocation=(obj)=>{
//   obj.teamId=1212212
//   return obj
// }

// const userData = { firstName : "John", lastName: "Dee" }
// console.log(podAndTeamAllocation(userData))
// // {firstName: 'John', lastName: 'Dee', teamId: 667543}

//------8---------
// Write an ES6 function which checks if a student already has a team. If team is not given then add them to team “A” and return the object else do nothing and return the same object. Avoid using in-built methods.

// Your ES6 code here


// const checkForTeam=(obj)=>{
//    if(!obj.team)
//     obj.team='A'

//     return obj
// }

// console.log(checkForTeam({firstName: 'Penn', lastName: 'Ma'}))
// // {firstName: 'Penn', lastName: 'Ma', team: A}

// console.log(checkForTeam({firstName: 'John', lastName: 'Dee', team: 'B'}))
// // {firstName: 'John', lastName: 'Dee', team: B}

// console.log(checkForTeam({firstName: 'Priya', lastName: 'Raj'}))
// // {firstName: 'Priya', lastName: 'Raj', team: A}

//-----------9-------
//Destructure the following code to get the desired outputs. Avoid using in-built methods.


// const book = { 
//   title: 'JavaScript: The Definitive Guide',  
//   authors: [{name: 'David Flanagan', age: 49 }, { name: 'Yukihiro Matsumoto', age: 57 }],  
//   publisher: {name: 'O\'Reilly Media', location: 'CA'}
// };

// // Your ES6 code here



// [title,author1,author2,publisherName]=[book.title,book.authors[0].name,book.authors[1].name,book.publisher.name]
// console.log(title); // JavaScript: The Definitive Guide
// console.log(author1); // David Flanagan 
// console.log(author2); // Yukihiro Matsumoto
// console.log(publisherName); // O'Reilly Media



// Your ES6 code here

//Write an ES6 function that takes an array of objects and returns the sum of all ages.

// const sumOfAllAges=(objArr=[],len)=>{
//   let sum=0
  
//   for(let i=0;i<len;i++){
//     sum= Number(objArr[i].age)+sum
  
//   }
//   return sum
// }
// var array = [
// 	{
// 		name: "Jay",
// 		age: 60
// 	},
// 	{
// 		name: "Gloria",
// 		age: 36
// 	},
// 	{
// 		name: "Manny",
// 		age: 16
// 	},
// 	{
// 		name: "Joe",
// 		age: 9
// 	}
// ];

// let len=array.length
// console.log(sumOfAllAges(array,len)); // 121



// functional programming que
// Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method.

// const incrementNumbers=(num)=>num+3;

// const numbers = [1, 2, 3, 4, 5];
// console.log( numbers.map(incrementNumbers))

// Output: [4, 5, 6, 7, 8]

//2  ---------

// Your ES6 function here


// const capitalizeArray=str=>str.toUpperCase()

// const myArray = ['apple', 'banana', 'cherry'];
// console.log(myArray.map(capitalizeArray))

// ---------3-------

// Your ES6 function here

// const getAges=(obj={})=>obj.age

// const people = [
//   { name: 'Ankit', age: 25 },
//   { name: 'Vinit', age: 24 },
//   { name: 'Shashi', age: 29 }
// ];
// const ages=people.map(getAges)
// console.log(ages); // Output: [25, 24, 29]

// --------------4----------
// Your ES6 function here

// getProductNamesInLowerCase=(obj={})=>obj.name.toLowerCase()
// const products = [
//   { name: 'Lip Balm', stock: 100 },
//   { name: 'PERFUME', stock: 400 },
//   { name: 'Socks', stock: 200 }
// ];
// console.log(products.map(getProductNamesInLowerCase));
// Output: ["lip balm", "perfume", "socks"]



//-------5--------
// Your ES6 function here


// getCityNames=(city={})=>city.name
// const cities = [
//   { name: 'New York', population: 8538000 },
//   { name: 'Los Angeles', population: 3976000 },
//   { name: 'Bangalore', population: 13608000 }
// ];

// console.log(cities.map(getCityNames)); 
// // Output: ["New York", "Los Angeles", "Bangalore"]

//------6------
// Your ES6 function here


// const filterstr=(str)=>str.length>5;


// const fruits = ['apple', 'banana', 'cherry', 'watermelon', 'pineapple'];
// console.log(fruits.filter(filterstr))

//   console.log(fruits.filter((n) => n.length > 5))
// // Output: ["banana", "cherry", "watermelon", "pineapple"]


//----7--------

// Your ES6 code here

// isDivisibleBy3and5=(num)=>num%3===0 && num%5===0

// const numbers = [1, 2, 30, 4, 15];
// console.log(numbers.filter(isDivisibleBy3and5));
// // Output: [30, 15]



//------8----------

// Your ES6 code here

// const filterByAge=(obj={})=>obj.age>30

// const people = [
//   { name: 'Rahul', age: 25 },
//   { name: 'Raj', age: 35 },
//   { name: 'Vijay', age: 45 }
// ];

// console.log(people.filter(filterByAge)); 
// // Output: [{ name: 'Raj', age: 35 }, { name: 'Vijay', age: 45 }]



//-------9---------
// Your ES6 code here


// const filterByScore=(obj={})=>obj.score>80;
// const students = [
//   { name: 'Aditya', score: 85 },
//   { name: 'Bob', score: 75 },
//   { name: 'Charlie', score: 90 }
// ];

// console.log(students.filter(filterByScore)); 
// // Output: [{ name: 'Aditya', score: 85 }, { name: 'Charlie', score: 90 }]

//---------10----------
// Your ES6 code here

// const filterByCityAndAge=(obj={})=>obj.city==='Indore'&& obj.age>70

// const people = [
//   { name: 'Ridhima', age: 75, city: 'Indore' },
//   { name: 'Akshay', age: 60, city: 'Delhi' },
//   { name: 'Udit', age: 80, city: 'Indore' },
// 	{ name: 'Venki', age: 80, city: 'Bangalore' }
// ];
// const filteredPeople = people.filter(filterByCityAndAge);
// console.log(filteredPeople); 
// // Output: [{ name: 'Ridhima', age: 75, city: 'Indore' }, { name: 'Udit', age: 80, city: 'Indore' }]


//----------11----------

// Your ES6 code here

// const filterByGenre=(obj={})=>obj.genre==='Science Fiction'

// const books = [
//   {title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"},
//   {title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction"},
//   {title: "1984", author: "George Orwell", genre: "Science Fiction"},
//   {title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance"}
// ];

// const filteredBooks =books.filter(filterByGenre);
// console.log(filteredBooks);
// // Output: [{title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"}, {title: "1984", author: "George Orwell", genre: "Science Fiction"}]

//--------12----------


// Your ES6 code here

// const filterBySalary=obj=>obj.salary>22000 && obj.age>25

// const employees = [
//   {name: "Abhay", age: 25, salary: 20000},
//   {name: "Joice", age: 30, salary: 35000},
//   {name: "Reena", age: 35, salary: 15000},
//   {name: "Jeena", age: 40, salary: 50000}
// ];

// const filteredEmployees = employees.filter(filterBySalary)
// console.log(filteredEmployees);
// // Output: [{name: "Joice", age: 30, salary: 35000}, {name: "Jeena", age: 40, salary: 50000}]

// Write an ES6 function that takes an array of objects containing Bollywood movie information 
// (title, director, year, rating) and returns an array with only the movies that were made before 1990 
// and has a rating above 8.0. (Question Level: tough)

//  const BestMovies=(movie)=> movie.year<1990 && movie.rating>8.0

// const filtered=(mov)=>mov.title
    
// const bollywoodMovies = [
//   { title: 'Sholay', director: 'Ramesh Sippy', year: 1975, rating: 8.2 },
//   { title: 'Amar Akbar Anthony', director: 'Manmohan Desai', year: 1977, rating: 7.6 },
//   { title: 'Namak Halaal', director: 'Prakash Mehra', year: 1982, rating: 7.4 },
//   { title: 'Mr. India', director: 'Shekhar Kapur', year: 1987, rating: 7.8 },
//   { title: 'Qayamat Se Qayamat Tak', director: 'Mansoor Khan', year: 1988, rating: 7.6 },
//   { title: 'Parinda', director: 'Vidhu Vinod Chopra', year: 1989, rating: 8.1 },
//   { title: 'Dil', director: 'Indra Kumar', year: 1990, rating: 7.8 }
// ];

// console.log(bollywoodMovies.filter(BestMovies).map(filtered))

// Instructions: 
// 1. Make use of .reduce() method in this set. 
// 2. You can make use of basic methods such as .length, toLowerCase(), toUpperCase() if needed. 
// 3. Do NOT use for-loops.

//  practice set 4  

// const concatinating=(acc,curr)=>acc+curr;

// const strings = ["apple", "banana", "cherry", "date", "blueberry"];
// // Your code here
// console.log(strings.reduce(concatinating).length)
// console.log(totalLength(strings));
// Output: 30

// Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array


// const sumSquares=(acc,curr)=>acc+(curr*curr);
// const numbers = [1, 2, 3, 4, 5];
// // Your code here
// console.log(numbers.reduce(sumSquares))
//  // Output: 55 

// Write an ES6 function that calculates and returns the total value of all items in an array of objects.

// const items = [
//   { name: "Item 1", price: 10 },
//   { name: "Item 2", price: 20 },
//   { name: "Item 3", price: 30 }
// ];
// // Your code here

// console.log(items.reduce((acc,curr)=>acc+curr.price,0))



// Write an ES6 function that takes an array of strings as input and concatenates them into a single string.

// Your code here


// const concatStrings=(str,curr)=>str+curr

// console.log(['this', 'is', 'fun'].reduce(concatStrings)); // Output: 'thisisfun'

// Write an ES6 function to multiply and return all the elements of a given array.

// const numbers = [1, 2, 3, 4, 5];
// // Your code here

// console.log(numbers.reduce((acc,curr)=>acc*curr,1));
// Output: 120

// Write an ES6 function that takes an array of strings and returns the longest string.
// const longestString=(acc,curr)=>{
//   if(curr.length>acc.length)
//    acc=curr

//    return acc;
// }
// const strings = [  "code","neogcamp", "Batman","Haule Haule", "Awesome"];
// // Your code here
// console.log(strings.reduce(longestString)); 
// // Output: 'Haule Haule'

// Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.

// const people = [
//   {name: 'Jeena', age: 25}, 
//   {name: 'Priya', age: 30}, 
//   {name: 'Naina', age: 45}
// ]
// // Your code here
// const oldestPersonName=(acc,curr)=>{
//   if(curr.age>acc.age)
//    acc=curr

//    return acc
// }
// console.log(people.reduce(oldestPersonName).name); 
// // Output: 'Naina'

// Write an ES6 function that takes an array of objects representing people with properties name and age, and returns an object with the average age of all the people.

//approach 
// used map for taking ages as an array 
//used reduce to calculated average
// const getAverage=(array)=>{
//   const totalAges=array.map((arr)=>arr.age)
//    const sum=totalAges.reduce((acc,curr)=>acc+curr);
//    return sum/array.length
// }
// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 },
//   { name: 'David', age: 40 }
// ];
// //32.5
// console.log(getAverage(people))

// Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns an object with the most expensive product.

// const findingMostExpensive=(array)=>{
//   return array.reduce((acc,curr)=>{
//     acc<curr.price
//     return acc=curr
//   })
// }
// const products = [
//   { name: "Bread", price: 10, quantity: 2 },
//   { name: "Clips", price: 20, quantity: 5 },
//   { name: "Knife", price: 30, quantity: 1 },
//   { name: "Slipper", price: 40, quantity: 3 },
// ];
// // Your code here
// console.log(findingMostExpensive(products))
// // console.log(products.reduce((acc,curr)=>{
// //   acc<curr.price
   
// //    return  acc=curr
  

   
// },0))

// Write an ES6 function that takes an array of strings and returns an object with the count of each string.
// const countStrings=(array)=>{

//  return  array.reduce((acc,curr)=>{
//     acc[curr]=acc[curr]?acc[curr]+1:1
//     return acc
//   },{})
// }
// const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];
// // Your code here



// console.log(countStrings(fruits));
// // Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }
