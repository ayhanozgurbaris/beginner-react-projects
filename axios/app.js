const axios = require('axios');


async function getUserData() {
	
    const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/users/1");
    const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts?userId=1");
    
    console.log("users", post1);
    console.log("users", post2);
}

getUserData()

