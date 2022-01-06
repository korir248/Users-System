const axios = require('axios')
const sendMail = require('../mail/mail')

const onTaskAssign = async()=> {
    try {
        const { data} = await axios.get('http://localhost:3002/tasks/email')
      if(data.length){
          data.map(task=>{
            const messageObj = {
                from: {
                    name: 'User System',
                    address: process.env.EMAIL,
                },
                to: task.email,
                subject: `Task Assignment`,
                html: `<div>
                <h4 style="text-align: center, font-weight: bold;">Hi ${task.fullname}</h4>
                <p style="text-align: center; color: grey; font-size: 19px;"></p>
                <p style="text-align: center; color: grey; font-size: 19px;">You have been assigned a task in the project ${task.project_name}</p>
                <p style="text-align: center; color: grey; font-size: 19px;"></p>
                <p style="text-align: center; color: grey; font-size: 19px;">Task: ${task.task_name}</p>
                <p></p>
                <p style="text-align: center; color: grey; font-size: 19px;">Login using <a href="http://192.168.1.131:3000">this link</a> to view more details!</p>
                <hr>
                <p style="text-align: center; color:grey;">If you have any questions send them to ${process.env.EMAIL}</p>
            </div>`,
            }

            sendMail(messageObj)
          })
      }
        
    } catch (error) {
        console.log({
            error: error.message
        });
        
    }
}

module.exports = onTaskAssign