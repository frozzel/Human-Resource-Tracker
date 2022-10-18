//// Dependencies/////
const express = require( 'express' );
const inquirer = require('inquirer');
const mysqlConnect = require('./db/connect')
// const consoleTable = require('console.table')
const initQuestions= require('./lib/initQuestions')

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
    init();
    

});

function init(){
    inquirer.prompt(initQuestions).then(function (res){
        switch(res.options){
            case "Add An Employee?":
                addEmp();
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




// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });