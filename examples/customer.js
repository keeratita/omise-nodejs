const client = require('./getOmiseClient');

async function run() {
  // Create a token
  // Please carefully read comments in token.js example.

  const newToken = await client.token.create({
    card: {
      name: 'John Doe',
      number: '4242 4242 4242 4242',
      expiration_month: 12,
      expiration_year: 2022,
      security_code: '123',
    },
  });

  if (newToken.object === 'error') throw newToken;

  // Create a customer
  let customer = await client.customer.create({
    card: newToken.id,
    name: 'John Doe',
    email: 'john.doe@example.com',
    description: 'id: 123',
  });

  if (customer.object === 'error') throw customer;

  console.log('customer id', customer.id);

  customer = await client.customer.update(customer.id, {
    metadata: {
      address: '123/456',
    },
  });

  if (customer.object === 'error') throw customer;

  console.log('customer', customer);

  // Search customers
  /**
   * Alternatively, you can use this below script.
   *
   * const result = await client.search.list({
   *  scope: 'customer',
   *  query: 'john.doe@example.com'
   * });
   */

  const result = await client.customer.search({
    query: 'john.doe@example.com',
  });

  console.log('search', result);

  // List schedules that related to the customer
  const schedules = await client.customer.listSchedules(customer.id);
  console.log('schedules', schedules);

  // List cards that related to the customer
  const cards = await client.customer.cardsOf(customer.id);
  console.log('cards', cards);
}

run().catch(console.error);
