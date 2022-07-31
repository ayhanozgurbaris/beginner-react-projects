const axios = require('axios');

async function getData(Number) {
     
    Number = 1;
    
    axios.get(`https://jsonplaceholder.typicode.com/users/${Number}`).then(resp => {
  
        console.log(resp.data);
    });

    }
    
getData()
