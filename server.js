//// Dependencies/////
const express = require( 'express' );
const inquirer = require('inquirer');
const mysqlConnect = require('./db/connect')
// const consoleTable = require('console.table')


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

});
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });