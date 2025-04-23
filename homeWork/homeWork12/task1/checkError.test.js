const axios = require ('axios');
const sendWrondUrl = require('./sendWrongUrl');


test ('Should have error', async () => {
    const results = await sendWrondUrl();
    console.log(results);
    expect(results).toBe('Request to this site is wrong');
});