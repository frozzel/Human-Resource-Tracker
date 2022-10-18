const mysqlConnect = require("../db/connect");
const inquirer= require('inquirer');

const empQuest= [
{
    type: 'input',
    name:'first_name',
    message: 'Whats thier first name?'
},
{
    type: 'input',
    name:'last_name',
    message: 'Whats thier last name?'
},
{
    type: 'input',
    name:'manager_id',
    message: 'Whats there manager id? Example 1-8 or null'
},
{
    type: 'input',
    name:'role_id',
    message: 'Whats there Role id? Example 1-8 or null',
},
{
    type: 'input',
    name:'Remaining_PTO',
    message: 'Remaining Paid Time Off in Days?',
},
{
    type: 'input',
    name:'Remaining_Sick_Days',
    message: 'Remaining Sick Days?',
},
{
    type: 'input',
    name:'Hire_Date',
    message: 'When where they hired? Example 2022-06-15',
},
{
    type: 'input',
    name:'New_Period',
    message: 'When does the next PTO period start? Example 2022-06-15',
},

];



module.exports= empQuest;