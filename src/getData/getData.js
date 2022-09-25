const axios = require('axios');
const mapArrToString = require('../mapArrToStrings/mapArrToStrings')

const getData = async () => {
    try{
        let {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
        let userIds = data.map(user => user.id) 
        //user id number to string
        return mapArrToString(userIds)
    }catch(e){
        console.log(e);
    }
  
}

module.exports = getData;