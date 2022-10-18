const mysqlConnect = require("../db/connect");


const empArrFill= ()=>{
    const empArr=[];
    mysqlConnect.query(`SELECT * FROM employee ORDER BY last_name`, (err, rows)=>{
        if (err)throw err;
        {
            console.log(err);
            return;
        }
        for (let i =0; i < rows.length; i++){
            empArr.push({name:rows[i].first_name + ' ' + rows[i].last_name, value:rows[i].id});
        }

    })
    return empArr;
}

roleArr=[];
const queryRole = 'SELECT id FROM roles';
mysqlConnect.query(queryRole, (err, res)=>{
    if (err)throw err;
    res.forEach(({id})=>{
        roleArr.push({id});
    })
})



const updateQuest= [
    {
        type: 'list',
        name:'roleUpdate',
        message: 'What employee would you like to update?',
        choices: empArrFill(),
    },
    {
        type: 'list',
        name:'assignRole',
        message: 'Which role do they now have?',
        choices: roleArr,
    },
   
    
]

module.exports= {updateQuest, empArrFill};