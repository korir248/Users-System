const atalking = require("../mail/sms");


const sendSMS = async()=>{

    try {
        const { data} = await axios.get('http://localhost:3001/email')
        if(data.length){
            data.map(user=>{
                const messageObj = {
					to: `+${user.phoneNumber}`,
					from: "7567",
					message: `Hello ${user.fullname},
                    Your registration for USers System was a success.
                    Login to be updated on tasks and other events.`,
				};

                await atalking.SMS.send(messageObj)
            })
        }
        
    } catch (error) {
        console.log(error.message);
    }
  

}


module.exports = sendSMS