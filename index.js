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