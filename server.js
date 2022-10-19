//// Dependencies/////
const express = require( 'express' );
const inquirer = require('inquirer');
const mysqlConnect = require('./db/connect');
const {empQuest, selMng, selRole} = require('./lib/addEmp');
const deptQuest = require('./lib/deptQuest');
const roleQuest= require('./lib/roleQuest');
const initQuestions= require('./lib/initQuestions');
const updateQuest= require('./lib/empUpdateQuest');


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
                console.log('')
                console.log('')
                console.log('***************************** Thank You Have a Nice Day! ********************************')
                console.log('')
                console.log('')
                process.exit();
        
            
        }
    })      
    }


/////////////////////////////////////// Views ///////////////////////////
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
//////////////////////////////////////// add stuff////////////////

function addNewEmp(){
    inquirer.prompt(empQuest)
    .then(function(res){
        let mngId = selMng().indexOf(res.choice)+1;
        let rolId = selRole().indexOf(res.roles)+ 1;
        const first_name= res.first_name;
        const last_name= res.last_name;
        const manager_id= mngId;
        const role_id= rolId;
        const Remaining_PTO= res.Remaining_PTO;
        const Remaining_Sick_Days= res.Remaining_Sick_Days;
        const Hire_Date= res.Hire_Date;
        const New_Period= res.New_Period;
        mysqlConnect.query(`INSERT INTO employee SET ?`, {first_name, last_name, manager_id, role_id, Remaining_PTO, Remaining_Sick_Days, Hire_Date, New_Period},
        (function(err){
            if (err)throw err;
            console.log('***************************************')
            console.log('*                                     *')
            console.log('*           Employee Added            *')
            console.log('*                                     *')
            console.log('***************************************')
            init();
        }))
    
    })
   
}

function addDep(){
    inquirer.prompt(deptQuest)
    .then(function(res){
        const name= res.name;
        
        mysqlConnect.query(`INSERT INTO department SET ?`, {name},
        (function(err){
            if (err)throw err;
            console.log('***************************************')
            console.log('*                                     *')
            console.log('*          Department Added           *')
            console.log('*                                     *')
            console.log('***************************************')
            init();
        }))
    
    })
   
}

function addRole(){
    inquirer.prompt(roleQuest)
    .then(function(res){
        const title= res.title;
        const salary= res.salary;
        const department_id= res.department_id;
        mysqlConnect.query(`INSERT INTO roles SET ?`, {title, salary, department_id},
        (function(err){
            if (err)throw err;
            console.log('***************************************')
            console.log('*                                     *')
            console.log('*             Role Added              *')
            console.log('*                                     *')
            console.log('***************************************')
            init();
        }))
    
    })
   
}

///////////////////////////////// Update Stuff ///////////////////////////

function updateEmp(){
    inquirer.prompt(updateQuest)
    .then(function(res){
        mysqlConnect.query(`UPDATE employee SET role_id = 1 WHERE manager_id = 5`,
        {
            role_id: selRole().indexOf(res.roles)+3,
            manager_id: selMng().indexOf(res.choice)+7,
        },
        (function (err) {
            if (err)throw err;
            console.log('***************************************')
            console.log('*                                     *')
            console.log('*         Employee Updated!           *')
            console.log('*                                     *')
            console.log('***************************************')
            init();
        }))
    })
}
