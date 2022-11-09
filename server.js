//this is me setting up an express server and still dont knowing what the f is going on

const express = require("express"),
  dbOperation = require("./dbFiles/dbOperation"),
  cors = require("cors");

const API_PORT = process.env.PORT || 5000;
const app = express();


//this allows us to take our json and pas them from our froint end to our server and we are gonna able to destructure or
// access the body of our json after douing this do npm i npm-run-all because then in our package.json we are gonna have to create a script
// so that we can start the server and build the react app at the same time
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/api', async (req, res) => {
  console.log('Called');
  const result = await dbOperation.getEmployees(req.body.name);
  res.send( result.recordset);
});

app.post("/hello", async (req, res) => {
  await dbOperation.createEmployee(req.body);
  const result = await dbOperation.getEmployees(req.body.vid);
  // req= request, res= response
  console.log("Called /hello");
  res.send( result.recordset);
});
app.delete("/del", async (req, res) => {
  await dbOperation.deleteEmployee(req.body.vid);
  const result = await dbOperation.getEmployees(req.body.vid);
  // req= request, res= response
  console.log("Called /del");
  res.send( result.recordset);
});

//location table API call
// app.post('/loc', async(req,res)=>{
//   const result = await dbOperation.fetchLocation(req.body.loc_name);
//   console.log('called /location')
//   res.send(result.recordset);
// })
// creating and getting  an employee in the server after setting up things in dbOperations file
// let Tiher= new Employee(1007, 'Tiger','Soni', 27, 'F');

// console.log(Tiher);

// dbOperation.getEmployees().then(res => {
//   console.log(res.recordset);
// })
// dbOperation.createEmployee(Tiher);

app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));
