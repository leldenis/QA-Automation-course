const axios = require('axios');
const jsonData = require('./env.json');
const fs = require('fs');



test ('Should login successful', async () => {
    const respons = await axios.post(`${jsonData.baseUrl}/user/login`, 
        {
        "email": 'salman@roadtocareer.net',
        "password": '1234'
        },
        {
            headers: {
            'Content-Type': 'application/json'
            }   
        }) 
    expect(respons.data.message).toBe('Login successful');

    let token = respons.data.token;
    jsonData.token = token;
    fs.writeFileSync('./env.json', JSON.stringify(jsonData));
})