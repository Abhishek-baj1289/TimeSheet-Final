
// import React, { useState } from "react";
// //import "./components/test.js"
// // import { format } from "date-fns"
// // import { get } from "jquery";
 import $ from 'jquery'; 
 import PHONE_REGEX from 'jquery';
 import { ready } from 'jquery';
 import bind from 'jquery'
// //this is the front end component of the react app

// function Create() {
//   const [returnedData, setReturnedData] = useState(['hello']);

//   const [employee, setEmployee] = useState({
//     // EmployeeId: 0,
//     Firstname: '',
//     Middlename:'',
//     Lastname: '',
//     Fathername:'',
//     vid:'',
//     Email:'',
//     Dob: '1997-06-06',
//     Gender:'', 
//     Locations:'',
//     Addresses:'',
//     phone: 0,
//   })//use state is a react hook for functional component

// //location api call  
//   // const [location, setLocation] = useState({
//   //   loc_id: 1,
//   //   loc_name: 'this works!',
//   //   EmployeeId: 1
//   // })

// // to fetch location data from the dbOperation and display them as a drop down list
//   // const fetchLocation = async() => {
//   //   const new_loc = await fetch('/loc',{
//   //     method : 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //       'Accept': 'application/json',
//   //     },
//   //     body : JSON.stringify({
//   //       name: location.loc_name,
//   //     }),
//   //   }).then((res) => res.json());
//   //   console.log(new_loc);
//   //   setLocation(new_loc[0]);
//   // }

//   const setInput = (e) => {
//     const { name, value } = e.target; //here we are destructuring this is somewhat TODO concept but in a gist
//     console.log(value);
//     if (name === "EmployeeID" || name === "Age") {
//       setEmployee(prevState => ({
//         ...prevState,
//         [name]: parseInt(value)
//       }));
//       //this was added for form validation    

//       //delete until this if the form validation doesnt work at all
//       return; //this is called return early you no longer need the else statement
//     }  //essentially e.taget has some values in the html page and we just wanna exxtract name and value
//     setEmployee(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   }

//   //functional component in react we're going to need use state
//   const fetchData = async () => {
//     // This is the call to the backend api which is using an express server
//       console.log(employee);
//     //   if(employee.length===0){
//     //     alert("This")
//     // }
//     // else{
//     const newData = await fetch("/api", {
//       //fetch is built in JS interface for accesing and manipulating parts of th eHTTP pipeline
//       // the alternative is axios vut we have to install it and its work is almost done by fetch inbuilt api access method

//       method: "POST",
//       headers: {
//         //headers help us to tell the respnonse how we are sending and accepting the data
//         // for the get method we are just accepting the data in the json format whis is displayed in the line .then(res=>res.json());
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//       },
//       body: JSON.stringify({
//         name: employee.vid,
//       }),
//     }).then((res) => res.json());
//       if(newData.length===0){
//         alert("This user doesn't exist");
//         window.location.reload(false);
//       }
//     console.log(newData);
//     setReturnedData(newData[0]);
  
    


    
//   };
//   const createEmployee = async () => {
//     // This is the call to the backend api which is using an express server
//     const newData = await fetch("/hello", {
//       //fetch is built in JS interface for accesing and manipulating parts of th eHTTP pipeline
//       // the alternative is axios vut we have to install it and its work is almost done by fetch inbuilt api access method

//       method: "POST",
//       headers: {
//         //headers help us to tell the respnonse how we are sending and accepting the data
//         // for the get method we are just accepting the data in the json format whis is displayed in the line .then(res=>res.json());
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//       },
//       body: JSON.stringify({
//         ...employee    //this is the spread operator
//       }),
//     }).then((res) => res.json());
//     console.log(newData);
//     setReturnedData(newData[0]);
  

//   };
//   const deleteEmployee = async () => {
//     // This is the call to the backend api which is using an express server

//     const newData = await fetch("/del", {
//       //fetch is built in JS interface for accesing and manipulating parts of th eHTTP pipeline
//       // the alternative is axios vut we have to install it and its work is almost done by fetch inbuilt api access method

//       method: "DELETE",
//       headers: {
//         //headers help us to tell the respnonse how we are sending and accepting the data
//         // for the get method we are just accepting the data in the json format whis is displayed in the line .then(res=>res.json());
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//       },
//       body: JSON.stringify({
//         ...employee ,    //this is the spread operator
//       }),
//     }).then((res) => res.json())
//     .then(res => console.log(res));
//     console.log(newData);
//     alert("this user has been deleted")
//     window.location.reload(false);
//     // setReturnedData(newData[0]);
  

//   };
//   // const deleteEmployee = async () => {
//   //   // This is the call to the backend api which is using an express server
//   //     // console.log(employee);
//   //   //   if(employee.length===0){
//   //   //     alert("This")
//   //   // }
//   //   // else{
//   //   const newData = await fetch("/del", {
//   //     //fetch is built in JS interface for accesing and manipulating parts of th eHTTP pipeline
//   //     // the alternative is axios vut we have to install it and its work is almost done by fetch inbuilt api access method

//   //     method: "POST",
//   //     headers: {
//   //       //headers help us to tell the respnonse how we are sending and accepting the data
//   //       // for the get method we are just accepting the data in the json format whis is displayed in the line .then(res=>res.json());
//   //       'Content-Type': 'application/json',
//   //       'Accept': 'application/json',
//   //     },
//   //     body: JSON.stringify({
//   //       name: employee.vid,
//   //     }),
//   //   }).then((res) => res.json());
//   //     if(newData.length===0){
//   //       alert("This user has been deleted");
//   //       window.location.reload(false);
//   //     }
//   //   console.log(newData);
//   //   setReturnedData(newData[0]);
  
    


    
//   // };
// // //added this from website
// //   useEffect(() => {
// //   if (Object.keys(returnedData).length === 0) {
// //     console.log('Object is empty');
// //     alert("This user doesnt exist");
// //     window.location.reload(false);
// //   }

// //   if (Object.keys(returnedData).length > 0) {
// //     console.log('Object is NOT empty');
// //   
// // }, [returnedData]);
// let res=""
// // function fetchdate() {
//   const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// //   // const date = new date(ret);
// //   // var formattedDate = format(returnedData.Dob, "DD MM YYYY")
// //   // console.log(formattedDate);
//   let datetime=new Date(`${returnedData.Dob}`);
// //   // datetime=datetime+" "+datetime.getDate
// //   // datetime=datetime+" "+datetime.getMonth
  
//   let getm=month[datetime.getMonth()]
//   let getd=datetime.getDate()
//   getd=getd.toString()
//   let gety=datetime.getFullYear()
//   gety=gety.toString()
//   res=getd+" "+getm+" "+gety
//   if (isNaN(getd) || getm===undefined || isNaN(gety)){
//     res="";
//   }

// // }
// // const wrapperFunction = () => {
// //   //do something
// //   fetchData();
// //   //do something
// //   fetchdate()
// //   //do something

// //Email validation test

// //email validation test ends

// // datetime=datetime.getFullYear()
// // console.log(datetime);
// // var formattedDate = format(datetime, "MMMM do, yyyy H:mma");
// if(returnedData.length===0){
//   alert("This user doesnt exist");
// }
//   //to make sure we can se whats going on on the inspection tool
//   return (
//     <div className="App">
//     <div className ="row">
//     <div className ="column">
//     <input
//     id="em"
//       type="number"
//       name="EmployeeId"
//       placeholder="EmployeeID"

//       onChange={setInput}
//     ></input>
//     <input
//     id="fn"
//     onKeyPress={(event) => {
//       if (!/[A-Za-z]/.test(event.key)) {
//         event.preventDefault();
//       }
//     }}
//       name="Firstname"
//       placeholder="Firstname"
//       onChange={setInput}
//     ></input>
//      <input
//      id="mn"
//      onKeyPress={(event) => {
//       if (!/[A-Za-z]/.test(event.key)) {
//         event.preventDefault();
//       }
//     }}
//       name="Middlename"
//       placeholder="Middlename"
//       onChange={setInput}
//     ></input>
//     <input
//     id="ln"
//       name="Lastname"
//       onKeyPress={(event) => {
//         if (!/[A-Za-z]/.test(event.key)) {
//           event.preventDefault();
//         }
//       }}
//       placeholder="Lastname"
//       onChange={setInput}
//     ></input>
//      <input
//      id="fa"
//       name="Fathername"
//       onKeyPress={(event) => {
//         if (!/[A-Za-z]/.test(event.key)) {
//           event.preventDefault();
//         }
//       }}
//       placeholder="Fathername"
//       onChange={setInput}
//     ></input>
//      <input
//      id="vi"
//       name="vid"

//       placeholder="vid"
//       onChange={setInput}
//     ></input>
//      <input
//      id="ma"
//      type="email"
//      pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
//      name="Email"
//      placeholder="Email"
//     onChange={setInput}
//     ></input>
//      <input
//      id="do"
//       name="Dob"
//       type="date"
//       data-date=""
//       data-date-format = "YYYY -MM-DD"
//       placeholder="Dob"
//       onChange={setInput}
 
      
//     ></input>
//     <input
    
//     id="ge"
//       name="Gender"
//       onKeyPress={(event) => {
//         if (/[0-9]/.test(event.key)) {
//           event.preventDefault();
//         }
//       }}
//       placeholder="Gender"
//       onChange={setInput}
//     ></input>
//      <select
//      id="lo"
//       name="Locations"
//       placeholder="Location"
//       onChange={setInput}
//     >
//       <option>Gurgaon</option>
//       <option>Bangalore</option>

      
//       {/* <option>Bangalore</option> */}
//     </select>
//      <input
//      id="ad"
//       name="Addresses"
//       placeholder="Address"
//       onChange={setInput}
//     ></input>
//      <input
//      id="ph"
//      type="number"
//      onKeyPress={(event) => {
//       if (!/[0-9]/.test(event.key)) {
//         event.preventDefault();
//       }
//     }}
//       name="phone"
//       placeholder="Phone number"
//       onChange={setInput}
//     ></input>
    
    
//     {/* <button id="fe" onClick={()=>fetchData()}>Fetch</button> */}
//     <button id="cr" onClick={() => createEmployee()}>Create</button>
//     {/* <button id="cr" onClick={() => deleteEmployee()}>Delete</button> */}
//     {/* <button id="fl" onClick={() => fetchLocation()}>Location placeholder</button> */}
//     </div>
//     {/* //place where data is to be diplayed on the front end */}
//     <div className ="column">
//       <div id = "jay">
   
//     <p id="ep">EmployeeID&#160;&#160;&#160;&#160;&#160;&#160;:&#160;&#160;&#160;{returnedData.EmployeeId}</p>
//     <p>Firstname&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;:&#160;&#160;&#160;{returnedData.Firstname}</p>
//     <p>Middlename&#160;&#160;&#160;&#160;:&#160;&#160;&#160;{returnedData.Middlename}</p>
//     <p>Lastname&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;:&#160;&#160;&#160;{returnedData.Lastname}</p>
//     <p>Fathername&#160;&#160;&#160;&#160;&#160;:&#160;&#160;&#160;{returnedData.Fathername}</p>
//     <p>vid&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;: &#160;&#160;&#160;{returnedData.vid}</p>
//     <p>Email&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;:&#160;&#160;&#160;{returnedData.Email}</p>
//     <p>Dob&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;:&#160;&#160;&#160;{res}</p>
//     <p>Gender&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;:&#160;&#160;&#160;{returnedData.Gender}</p>
//     <p>Locations&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;:&#160;&#160;&#160;{returnedData.Locations}</p>
//     <p>Addresses&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;:&#160;&#160;&#160;{returnedData.Addresses}</p>
//     <p>phone&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;:&#160;&#160;&#160;{returnedData.phone}</p>
//     </div>
//     </div>
//     </div>
//   </div>
//   // </form>
//   );
// }

// export default Create;

// //how do we go ahead and make the API call, store the value in rd data
// //and then produce that change on the UI

// //inside our getDAta call(newdata here const newData = await fetch(url,{ )
// //we are going to do  set rd data



import React, { useState } from "react";
//import "./test.js.js"
// import { format } from "date-fns"
// import { get } from "jquery";
// import $ from 'jquery';
//this is the front end component of the react app

function Create() {
  const [returnedData, setReturnedData] = useState(['hello']);

  const [employee, setEmployee] = useState({
    // EmployeeId: 0,
    vid:'',
    Firstname: '',
    Middlename:'',
    Lastname: '',
    Fathername:'',
    // vid:'',
    Email:'',
    Dob: '1997-06-06',
    Gender:'', 
    Locations:'Gurgaon',
    Addresses:'',
    phone: 0,
  })//use state is a react hook for functional component

//location api call  
  // const [location, setLocation] = useState({
  //   loc_id: 1,
  //   loc_name: 'this works!',
  //   EmployeeId: 1
  // })

// to fetch location data from the dbOperation and display them as a drop down list
  // const fetchLocation = async() => {
  //   const new_loc = await fetch('/loc',{
  //     method : 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     },
  //     body : JSON.stringify({
  //       name: location.loc_name,
  //     }),
  //   }).then((res) => res.json());
  //   console.log(new_loc);
  //   setLocation(new_loc[0]);
  // }

  const setInput = (e) => {
    const { name, value } = e.target; //here we are destructuring this is somewhat TODO concept but in a gist
    console.log(value);
    if (name === "Firstname" || name === "Age") {
      setEmployee(prevState => ({
        ...prevState,
        [name]: parseInt(value)
      }));
      //this was added for form validation    

      //delete until this if the form validation doesnt work at all
      return; //this is called return early you no longer need the else statement
    }  //essentially e.taget has some values in the html page and we just wanna exxtract name and value
    setEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  //functional component in react we're going to need use state
  const fetchData = async () => {
    // This is the call to the backend api which is using an express server
      console.log(employee);
    //   if(employee.length===0){
    //     alert("This")
    // }
    // else{
    const newData = await fetch("/api", {
      //fetch is built in JS interface for accesing and manipulating parts of th eHTTP pipeline
      // the alternative is axios vut we have to install it and its work is almost done by fetch inbuilt api access method

      method: "POST",
      headers: {
        //headers help us to tell the respnonse how we are sending and accepting the data
        // for the get method we are just accepting the data in the json format whis is displayed in the line .then(res=>res.json());
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: employee.vid,
      }),
    }).then((res) => res.json());
      if(newData.length===0){
        alert("This user doesn't exist");
        window.location.reload(false);
      }
    console.log(newData);
    setReturnedData(newData[0]);
  
    


    
  };
  const createEmployee = async () => {
    // This is the call to the backend api which is using an express server
    const newData = await fetch("/hello", {
      //fetch is built in JS interface for accesing and manipulating parts of th eHTTP pipeline
      // the alternative is axios vut we have to install it and its work is almost done by fetch inbuilt api access method

      method: "POST",
      headers: {
        //headers help us to tell the respnonse how we are sending and accepting the data
        // for the get method we are just accepting the data in the json format whis is displayed in the line .then(res=>res.json());
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        ...employee    //this is the spread operator
      }),
    }).then((res) => res.json());
    console.log(newData);
    setReturnedData(newData[0]);
  

  };
  const deleteEmployee = async () => {
    // This is the call to the backend api which is using an express server

    const newData = await fetch("/del", {
      //fetch is built in JS interface for accesing and manipulating parts of th eHTTP pipeline
      // the alternative is axios vut we have to install it and its work is almost done by fetch inbuilt api access method

      method: "DELETE",
      headers: {
        //headers help us to tell the respnonse how we are sending and accepting the data
        // for the get method we are just accepting the data in the json format whis is displayed in the line .then(res=>res.json());
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        ...employee ,    //this is the spread operator
      }),
    }).then((res) => res.json())
    .then(res => console.log(res));
    console.log(newData);
    alert("this user has been deleted")
    window.location.reload(false);
    // setReturnedData(newData[0]);
  

  };
  // const deleteEmployee = async () => {
  //   // This is the call to the backend api which is using an express server
  //     // console.log(employee);
  //   //   if(employee.length===0){
  //   //     alert("This")
  //   // }
  //   // else{
  //   const newData = await fetch("/del", {
  //     //fetch is built in JS interface for accesing and manipulating parts of th eHTTP pipeline
  //     // the alternative is axios vut we have to install it and its work is almost done by fetch inbuilt api access method

  //     method: "POST",
  //     headers: {
  //       //headers help us to tell the respnonse how we are sending and accepting the data
  //       // for the get method we are just accepting the data in the json format whis is displayed in the line .then(res=>res.json());
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: employee.vid,
  //     }),
  //   }).then((res) => res.json());
  //     if(newData.length===0){
  //       alert("This user has been deleted");
  //       window.location.reload(false);
  //     }
  //   console.log(newData);
  //   setReturnedData(newData[0]);
  
    


    
  // };
// //added this from website
//   useEffect(() => {
//   if (Object.keys(returnedData).length === 0) {
//     console.log('Object is empty');
//     alert("This user doesnt exist");
//     window.location.reload(false);
//   }

//   if (Object.keys(returnedData).length > 0) {
//     console.log('Object is NOT empty');
//   
// }, [returnedData]);
let res=""
// function fetchdate() {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//   // const date = new date(ret);
//   // var formattedDate = format(returnedData.Dob, "DD MM YYYY")
//   // console.log(formattedDate);
  let datetime=new Date(`${returnedData.Dob}`);
//   // datetime=datetime+" "+datetime.getDate
//   // datetime=datetime+" "+datetime.getMonth
  
  let getm=month[datetime.getMonth()]
  let getd=datetime.getDate()
  getd=getd.toString()
  let gety=datetime.getFullYear()
  gety=gety.toString()
  res=getd+" "+getm+" "+gety
  if (isNaN(getd) || getm===undefined || isNaN(gety)){
    res="";
  }

// }
// const wrapperFunction = () => {
//   //do something
//   fetchData();
//   //do something
//   fetchdate()
//   //do something

//Email validation test

//email validation test ends

// datetime=datetime.getFullYear()
// console.log(datetime);
// var formattedDate = format(datetime, "MMMM do, yyyy H:mma");
if(returnedData.length===0){
  alert("This user doesnt exist");
}

// this is the validation function on phone number
// function phoneno(){          
//   $('#ph').KeyPress(function(e) {
//       var a = [];
//       var k = e.which;

//       for ( var i = 48; i < 58; i++)
//           a.push(i);

//       if (!(a.indexOf(k)>=0))
//           e.preventDefault();
//   });
// }




 var SIZE = 10
$(document).ready(function() {
      $("#ph").bind('keyPress', function() { 
            if($("#ph").val().length <= SIZE && PHONE_REGEX) {
                return true;
            }
            else {
                return false;
            }  
      });
});







  //to make sure we can se whats going on on the inspection tool
  return (
    <div className="App">
    <div className ="row">
    <div className ="column">
    <input
     id="vi"
      name="vid"

      placeholder="vid"
      onChange={setInput}
    ></input>

   <input
    id="fn"
    onKeyPress={(event) => {
      if (!/[A-Za-z]/.test(event.key)) {
        event.preventDefault();
      }
    }}
      name="Firstname"
      placeholder="Firstname"
      onChange={setInput}
    ></input>
     <input
     id="mn"
     onKeyPress={(event) => {
      if (!/[A-Za-z]/.test(event.key)) {
        event.preventDefault();
      }
    }}
      name="Middlename"
      placeholder="Middlename"
      onChange={setInput}
    ></input>
    <input
    id="ln"
      name="Lastname"
      onKeyPress={(event) => {
        if (!/[A-Za-z]/.test(event.key)) {
          event.preventDefault();
        }
      }}
      placeholder="Lastname"
      onChange={setInput}
    ></input>
     <input
     id="fa"
      name="Fathername"
      onKeyPress={(event) => {
        if (!/[A-Za-z]/.test(event.key)) {
          event.preventDefault();
        }
      }}
      placeholder="Fathername"
      onChange={setInput}
    ></input>
     {/* <input
     id="vi"
      name="vid"

      placeholder="vid"
      onChange={setInput}
    ></input> */}
     <input
     id="ma"
     type="email"
     pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
     name="Email"
     placeholder="Email"
    onChange={setInput}
    ></input>
     <input
     id="do"
      name="Dob"
      type="date"
      data-date=""
      data-date-format = "YYYY -MM-DD"
      placeholder="Dob"
      onChange={setInput}
 
      
    ></input>
    <input
    
    id="ge"
      name="Gender"
      onKeyPress={(event) => {
        if (/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}
      placeholder="Gender"
      onChange={setInput}
    ></input>
     <select
     id="lo"
      name="Locations"
      placeholder="Location"
      onChange={setInput}
    >
      <option>Gurgaon</option>
      <option>Bangalore</option>

      
      {/* <option>Bangalore</option> */}
    </select>
     <input
     id="ad"
      name="Addresses"
      placeholder="Address"
      onChange={setInput}
    ></input>
     <input
     id="ph"
     type="number"
    // 
    size="10"
    //  required
    //  onKeyPress={(event) => {
    //   if (/@"\d{10}"/.test(event.key)) {
    //     event.preventDefault();
    //   }
    // }}
    // onKeyPress={phoneno}
      name="phone"
      placeholder="Phone number"
    
      onChange={setInput}
<<<<<<< Updated upstream
=======
      maxLength="10"
      m
>>>>>>> Stashed changes
    ></input>
    
    
    {/* <button id="fe" onClick={()=>fetchData()}>Fetch</button> */}
    <button id="cr" onClick={() => createEmployee()}>Create</button>
    {/* <button id="cr" onClick={() => deleteEmployee()}>Create</button> */}
    {/* <button id="fl" onClick={() => fetchLocation()}>Location placeholder</button> */}
    </div>
    {/* //place where data is to be diplayed on the front end */}
    <div className ="column">
      <div id = "jay">
   
    {/* <p id="ep">EmployeeID&#160;&#160;&#160;&#160;&#160;&#160;:&#160;&#160;&#160;{returnedData.EmployeeId}</p> */}
    <p>vid&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;: &#160;&#160;&#160;{returnedData.vid}</p>
    <p>Firstname&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;:&#160;&#160;&#160;{returnedData.Firstname}</p>
    <p>Middlename&#160;&#160;&#160;&#160;:&#160;&#160;&#160;{returnedData.Middlename}</p>
    <p>Lastname&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;:&#160;&#160;&#160;{returnedData.Lastname}</p>
    <p>Fathername&#160;&#160;&#160;&#160;&#160;:&#160;&#160;&#160;{returnedData.Fathername}</p>
    {/* <p>vid&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;: &#160;&#160;&#160;{returnedData.vid}</p> */}
    <p>Email&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;:&#160;&#160;&#160;{returnedData.Email}</p>
    <p>Dob&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;:&#160;&#160;&#160;{res}</p>
    <p>Gender&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;:&#160;&#160;&#160;{returnedData.Gender}</p>
    <p>Locations&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;:&#160;&#160;&#160;{returnedData.Locations}</p>
    <p>Addresses&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;:&#160;&#160;&#160;{returnedData.Addresses}</p>
    <p>phone&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;:&#160;&#160;&#160;{returnedData.phone}</p>
    </div>
    </div>
    </div>
  </div>
  // </form>
  );
}

export default Create;

//how do we go ahead and make the API call, store the value in rd data
//and then produce that change on the UI

//inside our getDAta call(newdata here const newData = await fetch(url,{ )
//we are going to do  set rd data
