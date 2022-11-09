// const loadScript = async (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script")
//         script.scr=src
//         script.onload=()=>{
//             resolve(src+"success")
//         }
//         document.head.append(script)
//     })
// }
// let a = loadScript('./test1.js')
// a.then((value)=>{
//         console.log(value);
// })
// const maine2 = async () =>{
//     console.log(new Date());
//     let a = await loadScript('./test1.js')
//     console.log(a)
// }

// const { response } = require("express")

// function person(first_name,last_name){
//     this.first_name = first_name;
//     this.last_name = last_name;
//  }
//  // creating new instances of person object
//  let person1 = new person('Mukul','Latiyan');
//  let person2 = new person('Rahul','Avasthi');

// const { getValue } = require("@testing-library/user-event/dist/utils");

// const { Callbacks } = require("jquery");

//  console.log(person1.first_name);
//  console.log(`${person2.first_name} ${person2.last_name}`);
// let str = "hello";
// let str2 = str + 1;
// console.log(typeof str2);
// const obj = { 1: 1 };
// obj["2"] = 2;
// console.log(obj);
// function myfuntion(a, b) {
//   return a ** b;
// }
// console.log(myfuntion(45, 54));
// console.log(("har\"".length));
// const sentence = 'The quick brown fox jumps over the lazy dog';
// const word = 'fox';
// console.log(`The word "${word}" ${sentence.includes(word)?'is':'is not'} in the sentence`);

// let arr = [45,23,21]
// let a= arr.map((i, index,arr)=>{   //this creates a new array
//     console.log(i);
//     return i+index
// })
// console.log(a);

// //array filter method
// let arr2=[45,23,21,0,3,5]
// let a2=arr2.filter((value)=>{  //the original array will not change
//     return value<10
// })
// console.log(a2);

// //reduce method
// const reduce_func = (h1,h2) => {
//     return h1+h2;
// }
// function red(x,y) {
//     return x+y
// }

// let arr3= [1,2,3,5,2,1]  //this takes up 0 and 1 value and then output of the result would be then put up with 4rd value
// let newarr3=arr3.reduce(red);
// console.log(newarr3);

// let arr= [1,2,3,4,5]
// let a = prompt("Enter a number")
// arr.push(a)
// let arr= [1,2,3,4,5]
// let a;
// do{
//     a = prompt("Enter a number");
//     a= Number.parseInt(a);
//     arr.push(a);
// } while (a!==0);
// console.log(arr);

// let arr=[1,2,3,4,50];
// let newarr=arr.filter((a)=>{
//     return a%10==0;
// })
// console.log(newarr)

// let arr=[1,2,3,4,50];
// let newarr=arr.reduce((a,y)=>{
//     return a*y;
// })
// console.log(newarr,"")

// window.console.log(window)
// console.log();

// console.log(document.Element.firstChild);
// console.log(document.Element.lastChild);
// console.log(document.Element.childNodes);

// //this works as an array but this isnt an array its node ;ist
// //so
// if( Element.childNodes[0]===Element.firstChild || Element.childNodes[Element.childNodes.length-1]===Element.lastChild){
//     console.log("this is always true");
// }
// // to change it into array
// let arr = Array.from(Element.childNodes)
// console.log(arr); // now this is an array

// //How to access a parent from its parent

// let  id1 = document.getElementById("id1");
// console.log(id1.matches(".class"));

// arr=document.getElementById('This')
// arr.style.color='blue'

//setINterval and setTimeout
// console.log('helo');
// let a = setTimeout(() => {
//     console.log('(hello2)');
// }, 5000);
// clearTimeout(a) // this delete the timer a

// let b = prompt("D")
// if("n"===b){
//     clearTimeout(b) // thjs is used to clear the set timeout
// }
// setTimeout(() => {
//     console.log("temp");
// }, 1000);
// console.log(a);
// btn.addEventListener('click',function(e){
//     alert("hello1! ")
// let btn = e.target;
// let btn_id = btn.id;
// let btn_name = btn.textContent;
// let btn_class = btn.className;
// let btn_value = btn.value;
// })

// let x= function(e){
//     console.log("h1");
// }
// let y = function(e){
//     console.log('h2');
// }
// btn.addEventListener('click', x)
// btn.addEventListener('click', y)
// let a = prompt("Enter 1/2")
// if(a=="2"){
//     btn.removeEventListener('click',x)
// }
// if (a=='1'){
//     btn.removeEventListener('click',y)
// }

// let a = new Date()
// let h=a.getHours()
// let m=a.getMinutes()
// console.log(h,m);

//Async Functions
// console.log('start');
// setTimeout(() => {
//     console.log('timeout function');
// }, 5000);
// console.log('End');

// Callbacking functions

// function loadScript(src, customcallback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload=()=>{
//         console.log('SRC: ',src,'has been loaded');
//         customcallback(null, src);
//     }
//     script.onerror=()=>{
//         console.log("Error loading script src: "+src);
//         customcallback(new Error("Src got some error: "+src))
//     }
//     document.body.appendChild(script);
// }

// loadScript("https://cdn.jsdeliv564hfr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",function hello(error, src) {
//     if(error){
//         console.log(error);
//         return
//     }
//     loadScript("https://cdn.jsdeliv564hfr.net/npm/bootstrap@5.2.2/dist/js/bootstrap2.bundle.min.js",function hello(error, src) {} )
// }); // more this and then it would cerate a callback hell to resolve this we use promises

// let promise =  new Promise(function(resolve, reject) {
//     console.log('hello in side promise');
//     resolve(56)
//     // console.log('I am an alert in promise');
// });

// console.log('hello');
// setTimeout(() => {
//     console.log('inside settimepuit');
// }, 2000);

// console.log('this is after setTimeout');
// console.log(promise);

// Promises are used for parellel execution

// let p1 = new Promise((resolve, reject) => {
//     console.log('Promise is pending');
//     setTimeout(() => {
//         console.log('This was in prmose1 and it has been resolved');
//         // resolve(true)
//         resolve(true);
//     }, 5000);
// })
// let p2 = new Promise((resolve, reject) => {
//     console.log('Promise is pending');
//     setTimeout(() => {
//         console.log('This was in prmose2 and it has been rejected');
//         // resolve(true)
//         reject(new Error("I am an error"));
//     }, 5000);
// })
// p1.then((value)=>{
//     console.log(value);
// })
// p2.catch((error)=>{
//     console.log('Some error occured in p2');
// })

// p2.then((value,error)=>{
//     console.log(value);
//     console.log(error);

// });

//Promise chaining

// let p1= new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('This would be done inside 2 seconds promuse');
//         resolve(56)
//     }, 2000);
// })

// p1.then((value)=>{
//     console.log(value);
//     let p2=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise 2")
//         }, 2000);
//         ;
//     })
//     return p2;
// }).then((value)=>{
//     console.log('We are done');
//     return 2;
// }).then((value)=>{
//     console.log('now we are really done');
// })

// const loadScript = (src)=>{
//     return new Promise((resolve,reject) => {

//     let script=document.createElement("script");
//     script.type="text/javascript"
//     script.src=src
//     document.body.appendChild(script)
//     script.onload=()=>{
//         resolve("Script has been loaded")
//     }
//     script.onerror=()=>{reject(0)}
// })

// }

// let p1 = loadScript('./test1.js');
// p1.then((value)=>{
//     console.log(value);
//     return loadScript("./test2.js");
// }).then((value)=>{
//     console.log("Test2 has been loaded");
// }).catch((error)=>{
//     console.log("the script couldnt be loaded");
// })

// let p1= new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1)
//         console.log('This is p1 resolved');
//     }, 3000);
// })
// p1.then(()=>{
//     console.log('Handler 1');
// })

// p1.then(()=>{
//     console.log('this is now reolved');
// })

//Promise API

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Value 1");
//     }, 1000);
// })
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Value 2");
//     }, 2000);
// })
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Value 3");
//     }, 3000);
// })

// p1.then((value)=>{
//     console.log(value);
// })
// p2.then((value)=>{
//     console.log(value);
// })
// p3.then((value)=>{
//     console.log(value);
// })

// let promise_all=Promise.all([p1,p2,p3 ])
// promise_all.then((getValue)=>{
//     console.log(getValue);
// })

// let p1 = new Promise((resolve, re   ject) => {
//     setTimeout(() => {
//         resolve("Value 1");
//     }, 1000);
// })

//Aync and Await

// async function harry(){
//     let delhiWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('27 d')
//         }, 2000);
//     })
//     let bangloreWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("21 deg")
//         }, 5000);
//     })
//     console.log('fetching delhi weather');
//     let delhiw=await delhiWeather
//     console.log('fetched delhi weather'+delhiw);
//     console.log('fetching bangalore weaterh');
//     let bangloreW = await bangloreWeather
//     console.log('fetchED bangalore weaterh'+bangloreW);
//     console.log('both doene');
//     return [delhiw, bangloreW ]

// }
// harry().then((x)=>{
//     console.log(x);
// })

// let a =harry();
// a.then((value)=>{
//     console.log(value);
// })

// try{
//     throw new Error('This is my custom error ')
// } catch(error){
//     console.log(error.message);
// }

//to throw xcustome erre

// Practice //
//program to load a JS file in a browser using promises

// let p = ()=>{
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error("this is not acceptable"))
//     }, 3000);
// })
// }
// let a = async()=>{
//     try{
//     let c= await p()
//     console.log(c);}
//     catch(err){
//         console.log(err);
//     }
// }
// a()

// Fetch API
// let p = fetch("https://goweather.herokuapp.com/weather/NewYork")   //Now P is a promise
// p.then((response)=>{
//     // console.log(response.json());
//     console.log(response.headers );
//     return response.json()
// }).then((value2)=>{
//     console.log(value2 );
// })

//POST Request using JSONPlaceholder
const createTodo = async () => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      //valid json string ko js object mein change kr deta hai
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  };
  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let response = await p.json();
  return response;
};
const mainFunc = async () => {
  let todo = await createTodo();
  console.log(todo);
};
mainFunc();
