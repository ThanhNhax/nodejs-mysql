const express = require("express");
const app = express();
const db = require("./db");
const employeeRouter = require('./controllers/employee.controller')
require('express-async-errors')

// middleware
app.use('/api/employees',employeeRouter)

 
//
db.query("SELECT 1")
  .then(() => {
    console.log("db connection succeeded");
    app.listen(3000, () => console.log("server started at 3000"));
  })
  .catch((e) => console.log(e));
