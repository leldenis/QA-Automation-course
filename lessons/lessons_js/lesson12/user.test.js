const axios = require('axios');
const jsonData = require('./env.json');


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