const axios = require('axios');
const { fetchUser } = require('./userService');
const { faker } = require('@faker-js/faker');

jest.mock('axios');

describe('fetchUser', () => {
  it('should return user data on success', async () => {
    const mockUser = {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
    };

    axios.get.mockResolvedValueOnce({ data: mockUser });

    const result = await fetchUser(mockUser.id);
    expect(result).toEqual(mockUser);
  });

  it('should throw error on failure', async () => {
    axios.get.mockRejectedValueOnce(new Error('Network Error'));

    await expect(fetchUser('123')).rejects.toThrow('Failed to fetch user');
  });
});
