//// Dependencies/////
const express = require( 'express' );
const inquirer = require('inquirer');
const mysqlConnect = require('./db/connect');
const empQuest = require('./lib/addEmp');
// const consoleTable = require('console.table')
const initQuestions= require('./lib/initQuestions')
// const addEmp = require('./lib/addEmp')

///// Init Server & middle Ware ////
const app = express();
const PORT =  3306;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



console.log('****************************************************************************************************************************************************');
console.log(`
#     #                                ######                                                      #######                                           
#     # #    # #    #   ##   #    #    #     # ######  ####   ####  #    # #####   ####  ######       #    #####    ##    ####  #    # ###### #####  
#     # #    # ##  ##  #  #  ##   #    #     # #      #      #    # #    # #    # #    # #            #    #    #  #  #  #    # #   #  #      #    # 
####### #    # # ## # #    # # #  #    ######  #####   ####  #    # #    # #    # #      #####        #    #    # #    # #      ####   #####  #    # 
#     # #    # #    # ###### #  # #    #   #   #           # #    # #    # #####  #      #            #    #####  ###### #      #  #   #      #####  
#     # #    # #    # #    # #   ##    #    #  #      #    # #    # #    # #   #  #    # #            #    #   #  #    # #    # #   #  #      #   #  
#     #  ####  #    # #    # #    #    #     # ######  ####   ####   ####  #    #  ####  ######       #    #    # #    #  ####  #    # ###### #    #  
                                                                  By Dennis Hickox`)
console.log('***************************************************************************************************************************************************');                                                                                                                                                  

/// Connect to mySql /////

mysqlConnect.connect(err => {
    if (err) throw err;
    console.log('Your Now Connected!');
    viewEmp();
    

});

function init(){
    inquirer.prompt(initQuestions).then(function (res){
        switch(res.options){
            case "Add An Employee?":
                addNewEmp();
                break;
            case  "Add A Role?":
                addRole();
                break
            case   "Add A Department?":
                addDep();
                break;
            case  "View all Employees?":
                viewEmp();
                break;
            case  "View all Roles?":
                veiwRoles();
                break;
            case "View all Departments?":
                viewDept();
                break;
            case  "Update an Employee Role?":
                updateEmp();
                break;
            case "Exit":
                break;
            
        }
    })      
    }


///////////////////////////// Views ///////////////////////////
function viewDept(){
    mysqlConnect.query("SELECT * FROM department;", function(err, res){
        if (err) throw err;
        console.table(res);
        init();
    })
}
function viewEmp(){
    mysqlConnect.query("SELECT * FROM employee;", function(err, res){
        if (err) throw err;
        console.table(res);
        init();
    })
}
function veiwRoles(){
    mysqlConnect.query("SELECT * FROM roles;", function(err, res){
        if (err) throw err;
        console.table(res);
        init();
    })
}
///////////////// practice////////////////////////
// mysqlConnect.query("SELECT * FROM employee;", (req, res)=> ( console.table(res)));

/////////////////////// add stuff////////////////

function addNewEmp(){
    inquirer.prompt(empQuest)
    .then(function(res){
        const first_name= res.first_name;
        const last_name= res.last_name;
        const manager_id= res.manager_id;
        const role_id= res.role_id;
        const Remaining_PTO= res.Remaining_PTO;
        const Remaining_Sick_Days= res.Remaining_Sick_Days;
        const Hire_Date= res.Hire_Date;
        const New_Period= res.New_Period;
        mysqlConnect.query(`INSERT INTO employee SET ?`, {first_name, last_name, manager_id, role_id, Remaining_PTO, Remaining_Sick_Days, Hire_Date, New_Period},
        (function(err){
            if (err)throw err;
            init();
        }))
    
    })
   
}

