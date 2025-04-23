const axios = require('axios');

async function requestWithHeaders() {
  const response = await axios.get('https://httpbin.org/get', {
    headers: { 'X-Test': 'hello' },
    params: { name: 'John' }
  });
  return response.data;
}

module.exports = requestWithHeaders;
