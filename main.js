// console.log('hello wrold')
// console.error('this is an error')
// console.error('this is an warning')



         ////variables
//var ,let, const
//var is globally sculped , is not advised 
//let is used when the value is going to be reassigned
// let age = 30
// age= 31
// console.log(age)
//const is used when the value is  not going to be reassigned



         ////data types
//strings,numbers,boolean,null,undefined
//const name ='john'; (string)
//const age = 30; (number)
//const isCool = true;(boolean)
//const x = null;
//const y = undefined
//let z; (this is also undefined)

         ////concatenation
 const name = 'john';
 const age = 30;
// console.log('my name is ' + name + ' and iam ' + age);

         ////template strings
console.log(`my name is ${name} and iam ${age}`)

        //// properties
const s = 'hello world';
console.log(s.length); //finds the length of the word
console.log(s.toUpperCase()) //changes the word to uppercase
console.log(s.toLowerCase())//changes the word to lowercase
console.log(s.substring(0,5)) //counts the letters from index 0 to 5
console.log(s.substring(0,5).toUpperCase) //counts index and also turns to uppercase
console.log(s.split('')) //splits the letters individually
const y = 'orange, bananas, pineapple, avocados';
console.log(s.split(', ')) //creates an array



        ////arrays
 /*multiline comments
 arrays - are variables that hold multiple values*/
const fruits = ["appes","oranges", "pears",10, true];
console.log(fruits);
console.log(fruits[1]);
fruits.push('mangoes');//adding an extra item at the end of the array
fruits.unshift('passion');//adding an extra item at the beginning of the array
fruits.pop();//removing the last item from the array
console.log(Array.isArray('hello'));//check if a variable is an array or not
console.log(fruits.indexOf('oranges'));//finding the index of oranges  
console.log(fruits);



       ////object literals
const person ={
firstName: 'john',
lastName:'Doe',
age: 30,
hobbies:['music','drawing','cooking'],
address: {
    street: '50 main str',
    city: 'Boston',
    state: 'MA'
}

}
console.log(person.firstName. person.lastName); //accessing the firstanme and lastname 
console.log(person.hobbies[1]); //accessing the hobby with index 1
console.log(person.address.street);//accesing the street in address 

////destructuring
const {firstName, lastName,address:{city}} = person;
console.log(firstName);
person.email = 'john@gmail.com';//adding a property to the object
console.log(person)

////arrays of objects
const todos =[
    {
        id:1,
        text:'take out trash',
        isCompleted: true
    },
    {
        id:2,
        text:'meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text:'check up',
        isCompleted: false
    }
];
console.log(todos);
console.log(todos[1].text);



          ////loops
for(let i=0; i<10; i++){
    console.log(i)
}
for(let i=0; i<10; i++){
    console.log(`for loops number:${i}`);
}

//while loop
let i=0;
while(i<10){
    console.log(`while loop number ${i}`);
    i++; 
}

//looping through arrays
//foreach, map, filter
todos

 





