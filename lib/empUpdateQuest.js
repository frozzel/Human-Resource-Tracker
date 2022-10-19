const { selMng, selRole} = require('./addEmp');




const updateQuest= [
    {
        type: 'list',
        name:'roleUpdate',
        message: 'What employee would you like to update?',
        choices: selMng(),
    },
    {
        type: 'list',
        name:'assignRole',
        message: 'Which role do they now have?',
        choices: selRole(),
    },
   
    
]

module.exports= updateQuest;