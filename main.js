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
//console.log(colour)
/// "?" this the "ternary" operator ; the above statement states that if if x is greater
//than 10 then print red, otherwise print blue.


///switch statements
// const x =11;
// const colour = x>10 ? 'red':'blue';
// switch(colour){
//     case'red':
//     console.log("colour is red");
//     break;
//     case"blue":
//     console.log("colour is blue");
//     break;
//     default:
//         console.log("colour is not red or blue");
//         break;
// }



// ///FUNCTIONS///
// function addNums(num1, num2){
//     return(num1 + num2);
// }
// console.log (addNums(5,4));
// or
// function addNums(num1 =1, num2=3){
//    return(num1 + num2);
// }
// console.log (addNums());

///arrow functions///
//arrow fuctions are an easier way of writing functions
//const addNums = (num1 = 1 ,num2 = 1)=>num1 + num2;
//console.log (addNums(5,5))
//or
// const addNums = (num1 = 1 ,num2 = 1)=>console.log(num1 + num2);
// addNums(5,5)
//or
//const addNums = (num1 = 1 ,num2 = 1)=>console.log(num1 + 5);
//addNums(5)




///OBJECT ORIENTED PROGRAMMING///
//constructor function = it should start with a capital letter
// function Person(firstname, lastname, dob){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.dob = new Date(dob);

//    // instantiate Object
//     const Person1 = new Person("john","Doe","4-3-1998" );
//     console.log (Person1)

//     const Person2 = new Person("Mary","Smith","3-6-1988" );
//     console.log (Person2.firstname)
// }

//  ///other functions///
//  function Person(firstname, lastname, dob){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.dob = new Date(dob);
//     this.getBirthYear = function(){
//         return this.dob.getFullYear();
//     }
//     this.getFullname = function(){
//         return`${this.firstname}${this.lastname}`;
//     }
//     // instantiate Object

//     const Person1 = new Person("john","Doe","4-3-1998" );
//     const Person2 = new Person("Mary","Smith","3-6-1988" );
//     console.log (Person1. getBirthYear());
//     console.log (Person2. getFullname());
// }


// ///using a prototype separates the functions from the objects when viewd from the console
// ///the firstname, lastname , dob are objects and will be placed in one category while the functions 
// ///'getBirthyear' and 'getFullname' will be placed under the  _proto_
// /// a method is a function inside of a class
//  function Person(firstname, lastname, dob){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.dob = new Date(dob);
//    Person.prototype.getBirthYear = function(){
//     return this.dob.getBirthYear();
//    }
//    Person.prototype.getFullname = function(){
//     return this.dob.getFullname();
//    }

//  //class

//    class Person{
//     constructor(firstname, lastname, dob){
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.dob = new Date(dob);
//     }

//     getBirthYear(){
//         return this.dob.getFullYear();
//     }
//     getFullname(){
//         return`${this.firstname}${this.lastname}`;
//     }
//    }

// // instantiate Object

//     const Person1 = new Person("john","Doe","4-3-1998" );
//     const Person2 = new Person("Mary","Smith","3-6-1988" );
//     console.log (Person1); 
//     console.log (Person2. getFullname());
// }
// ///using classes is just a more familiar way and favourable
// // for other programms with different backgrounds otherwise it 
// // gives the same results as all the other methods




// ///DOM///DOCUMENT OBJECT MODEL
///SELECTORS
///single element selectors
//   console.log(document.getElementById('my-form'));
//   console.log(document.querySelector('h1'));

///multiple element selectors
//console.log(document.querySelectorAll('.item'));

 //looping through selectors
//const items = document.querySelectorAll('.item')
//items.foreach((item) => console.log(item));


///manipulating the DOM///
//const ul = document.querySelector('.items');
//ul.remove();

///removing the last element
// ul.lastElementChild.remove(); 

///replacing content
// ul.firstElementChild.textContent = 'hello';

///replacing any other content in a list
//when replacing the second ,third....etc elements in a list, we have to
//include the index of the item in the list.
// ul.children[1].innerText = 'Brad'// inner text is also a form of textcontent

///inner HTML
// ul.lastElementChild.innerHTML = '<h4>hello</h4>'// we use innerHTML when we want
//to include some HTML.

///adding or changing a style
 //const btn =document.querySelector('.btn')
// btn.Style.background = 'red'



//EVENT LISTENERS

//you first write the event,then a function you want to run when
// the event happens

// btn.addEventListener('click',(e) => {
//     e.preventDefault(); //this is used to stop the defult behaviour  
//     console.log('click') 
//})
//console.log(e)//this is used to show all the properties of the 
//event

//onsole.log(e.target)// this gives you the proprties of the actual 
//target, in this case, submit 

///changing  the style
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('my-form').Style.background= '#ccc';//when i c
//     //click the submit button the color is going to change.
// });

///adding a class
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('body').classList.add('bg-dark');//this means that when i 
//     //click the submit button, the body is going to change color
//     document.querySelector('.items')
//     .lastElementChild.innerHTML='<h1>hello</h1>'//so this means that 
//     //when i click the submit button, the lastelement child is 
//     //going to be replaced with the wordvj hello
// });

////examples of event listeners
//moushover....when you hover over the submit button,a function of your choice runs
//mousse out....when the mouse is hoveredout from the target,a function
//of youe selection takes place.


// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList= document.querySelector('#users');

// myForm.addEventListener('submit',onSubmit)

// function onSubmit(e) {
//     e.preventDefault();

//     console.log(nameInput.value)//this is to get the value that has 
//     //been put in the name label

//     if(nameInput.value === ''||emailInput.value === ''){
//         msg.classList.add('error');
//         msg.innerHTML = 'please enter all fields';

//         setTimeout(()=>msg.remove(), 3000 )
//     } else{
//         console.log('success');
//         const li =document.createElement('li');
//         li.appendChild(document.createTextNode(`${nameInput.value}
//         : ${emailInput.value}`));

//         userList.appendChild(li);
//     }
// }
// the above if else statement is to ensure that both fields are filled out
//th error message is used to show an error incase the user has not 
//entered all the field. the set time out takes in a function and the time in milliseconds
//in which you wish your event to take place. in this case , it is going to take 3 sec 
//before the error msg disappers.


//in else section,you can either get a success message or, display a list 
// of the name and email of the user 

//clear fields
// nameInput.value = '';
// emailInput.value = '';

//if you want to save data, u can use database
