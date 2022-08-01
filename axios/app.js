import axios from 'axios';


async function getData(Number) {

	
    const { data: post1 } = await axios(`https://jsonplaceholder.typicode.com/users/${Number}`);
    const { data: post2 } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${Number}`);
    
    console.log("users", post1);
    console.log("users", post2);
}

export default getData;