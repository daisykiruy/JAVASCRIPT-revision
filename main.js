// console.log('hello wrold')
// console.error('this is an error')
// console.warn('this is an warning')
///console.log displays or excecutes the intended action



         ////VARIABLES///
//var ,let, const
//var is globally sculped , is not advised 
//let is used when the value is going to be reassigned
// let age = 30
// age= 31
// console.log(age)
//const is used when the value is  not going to be reassigned
//const is mostly advised especially when you are not going to reassign the values



         ////DATA TYPES///
//strings,numbers,boolean,null,undefined
//const name ='john'; (string)
//const age = 30; (number)
//const isCool = true;(boolean)
//const x = null;
//const y = undefined
//let z; (this is also undefined)

         ////concatenation
//  const name = 'john';
//  const age = 30;
//  console.log('my name is ' + name + ' and iam ' + age);

         ////template strings
// console.log(`my name is ${name} and iam ${age}`)

//         //// properties
// const s = 'hello world';
// console.log(s.length); //finds the length of the word
// console.log(s.toUpperCase()) //changes the word to uppercase
// console.log(s.toLowerCase())//changes the word to lowercase
// console.log(s.substring(0,5)) //counts the letters from index 0 to 5
// console.log(s.substring(0,5).toUpperCase) //counts index and also turns to uppercase
// console.log(s.split('')) //splits the letters individually
// const y = 'orange, bananas, pineapple, avocados';
// console.log(s.split(', ')) //creates an array



//         ////ARRAYS///
//  /*multiline comments
//  arrays - are variables that hold multiple values*/
// const fruits = ["appes","oranges", "pears",10, true];
// console.log(fruits);
// console.log(fruits[1]);
// fruits.push('mangoes');//adding an extra item at the end of the array
// fruits.unshift('passion');//adding an extra item at the beginning of the array
// fruits.pop();//removing the last item from the array
// console.log(Array.isArray('hello'));//check if a variable is an array or not
// console.log(fruits.indexOf('oranges'));//finding the index of oranges  
// console.log(fruits);



//        ////OBJECT LITERALS///
// const person ={
// firstName: 'john',
// lastName:'Doe',
// age: 30,
// hobbies:['music','drawing','cooking'],
// address: {
//     street: '50 main str',
//     city: 'Boston',
//     state: 'MA'
// }

// }
// console.log(person.firstName. person.lastName); //accessing the firstanme and lastname 
// console.log(person.hobbies[1]); //accessing the hobby with index 1
// console.log(person.address.street);//accesing the street in address 

// ////destructuring
// const {firstName, lastName,address:{city}} = person;
// console.log(firstName);
// person.email = 'john@gmail.com';//adding a property to the object
// console.log(person)

// ////arrays of objects
// const todos =[
//     {
//         id:1,
//         text:'take out trash',
//         isCompleted: true
//     },
//     {
//         id:2,
//         text:'meeting with boss',
//         isCompleted: true
//     },
//     {
//         id:3,
//         text:'check up',
//         isCompleted: false
//     }
// ];
// console.log(todos);
// console.log(todos[1].text);



//           ////LOOPS///
// for(let i=0; i<10; i++){
//     console.log(i)
// }
// for(let i=0; i<10; i++){
//     console.log(`for loops number:${i}`);
// }

// //while loop
// let i=0;
// while(i<10){
//     console.log(`while loop number ${i}`);
//     i++; 
// }

//looping through arrays
//high order array methods
//foreach(loops through arrays), 
//map(allows us to create a new array from an array), 
//filter(allows us to ceate an array based on a condition)
// todos.forEach(function(todo){
//     console.log (todo.text);
// });

// const todotext = todos.map(function(todo){
//     return todo.text;
// });
// console.log(todotext)

// const todocompleted = todos.filter(function(todo){
//     return todo.iscompleted == true;
// }).map(function(todo){
//     return todo.text;
// })
// console.log(todocompleted);



// ////CONDITIONALS///
// ///IF STATEMENTS
// const y = 10;
// if (y===10){
//     console.log('y is 10');
// }
// // this statement is true and therefore the console will print y is 10
// // the conditional statement 'if' only prints when the condition is true

// const x = 10;
// if (x===10){
//     console.log('x is 10');
// }else{
//     console.log('x is not 10')
// }
// //the conditional statement "else" prints a false condition

// const z = 10;
// if (z===10){
//     console.log('z is 10');
// }
// else if(x>10) {
//     console.log('z is greater than 10')
// }
// else{
//     console.log('z is less than 10')
// }
// //"else if" prints a condition that is otherwise true

// const r = 4;
// const t = 10
// if( r>5 || t>10){
//     console.log('r is more than 5 or t is more than 10 ')
// }
// // "||" this is "or" symbol and it prints when either conditions is true

// const s = 4;
// const w = 10
// if( r>5 && t>10){
//     console.log('r is more than 5 or t is more than 10 ')
// }
// "&&" this is "and" symbol and it prints when both conditions are true
 
///ternary operator//
// const x =10;
// const colour = x>10 ? 'red':'blue';
/// "?" this the "then" operator ; the above statement states that if if x is greater
//than 10 then print red, otherwise print blue.





