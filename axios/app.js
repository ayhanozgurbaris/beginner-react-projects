const axios = require('axios');

 module.exports = async function getData(Number) { 
    
    const { data: getUser } = await axios(`https://jsonplaceholder.typicode.com/users/${Number}`)
    const { data: getPost } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${Number}`)

    return { getUser, getPost }
}

