const axios = require('axios')

const onTaskAssign = async()=> {
    try {
        let {data} = await axios.get("http://localhost:3002/tasks/email")
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}