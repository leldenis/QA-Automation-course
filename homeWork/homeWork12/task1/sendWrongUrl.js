const axios = require ('axios');

async function sendWrondUrl() {
    try {
        await axios.get('https://wrongUrl.com.ua');
      } catch (error) {
        return 'Request to this site is wrong';
      }
    }
    

    




module.exports = sendWrondUrl;