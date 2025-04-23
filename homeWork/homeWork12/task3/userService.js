const axios = require('axios');

const fetchUser = async (id) => {
  try {
    const response = await axios.get(`/api/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user');
  }
};

module.exports = { fetchUser };
