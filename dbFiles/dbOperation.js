const config = require("./dbConfig"),
  sql = require("mssql");

const getEmployees = async (firstname) => {
  try {
    let pool = await sql.connect(config);
    let employees = await pool.request().query(`SELECT * FROM EmployeeDemographics WHERE vid = '${firstname}'`);
    console.log(employees)
    return employees;
  } catch (error) {
    console.log(error);
  }
};


const createEmployee = async (Employee) => {
  try {
    let pool = await sql.connect(config);
    let employees = await pool.request()
      .query(`INSERT INTO EmployeeDemographics VALUES(
        '${Employee.vid}', '${Employee.Firstname}','${Employee.Middlename}', '${Employee.Lastname}', '${Employee.Fathername}','${Employee.Email}','${Employee.Dob}','${Employee.Gender}','${Employee.Locations}','${Employee.Addresses}','${Employee.phone}')
        `);

    return employees;
  } catch (error) {
    console.log(error);
  }
};
const deleteEmployee = async (Employee) => {
  try {
    let pool = await sql.connect(config);
    let employees = await pool.request()
      .query(`DELETE FROM EmployeeDemographics WHERE vid = '${Employee}';`);

    return employees;
  } catch (error) {
    console.log(error);
  }
};

// const fetchLocation = async(Location) =>{
//   try{
//     let pool = await sql.connect(config);
//     let location = await pool.request()
//       .query(`SELECT loc_name FROM Location`);
//       return location;
//   }catch(error){
//     console.log(error)
//   }
// }

module.exports = {
  createEmployee,
  getEmployees,
  deleteEmployee,
};