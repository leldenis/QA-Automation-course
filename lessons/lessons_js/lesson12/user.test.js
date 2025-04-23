const axios = require('axios');
const jsonData = require('./env.json');
const {faker} = require('@faker-js/faker')


test ('Should have user data', async () => {
    const response = await axios.get (`${jsonData.baseUrl}/user/list`,
        {
        headers: {
            'Authorization': `Bearer ${jsonData.token}`,
            'Content-Type': 'application/json'
            }
        }
    )
    expect(response.data.message).toBe ('User list')
});


test ('Should have user data', async () => {
    const response = await axios.post(`${jsonData.baseUrl}/users/add`,
        {
            "firstName": faker.internet.username(), 
            "lastName": faker.internet.lastName, 
            "age": 23
        },
        {
        headers: {
            'Authorization': `Bearer ${jsonData.token}`,
            'Content-Type': 'application/json'
            }
        }
    )
    console.log(response.data);
    // expect(response.data.message).toBe ('User list')
});