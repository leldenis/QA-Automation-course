const testForHeaders = require('./requestWithHeaders');

test('перевіряємо хедер і параметр name', async () => {
  const data = await testForHeaders();
  expect(data.headers['X-Test']).toBe('hello');
  expect(data.args.name).toBe('John');
});
