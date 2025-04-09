const axios = require ('axios');

async function fetchData() {
    try
    {
        const respons = await axios.get('https://httpbin.org/get');
        console.log(respons.data);
    }
    catch (error) 
    {
        console.error(error);
        
    }
    
}