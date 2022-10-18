const mysqlConnect = require("../db/connect");
const inquirer= require('inquirer');

let mngArr=[];
function selMng(){
    mysqlConnect.query('SELECT first_name FROM employee WHERE manager_id',
    function(err, res){
        if (err)throw err;
        for (let i = 0; i < res.length; i++){
            mngArr.push(res[i].first_name);
        }
    })
    return mngArr;
}

let roleArr= [];
function selRole(){
    mysqlConnect.query('SELECT * FROM roles', function (err, res){
        if (err)throw err;
        for (let i = 0; i < res.length; i++){
            roleArr.push(res[i].title)
        }
    })
    return roleArr;
}



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
    type: 'list',
    name:'manager_id',
    message: 'Whats there manager name',
    choices: selMng(),
},
{
    type: 'list',
    name:'role_id',
    message: 'Whats there Role?',
    choices: selRole(),
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



module.exports= {empQuest, selMng, selRole};