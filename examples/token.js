/**
 * Please be careful if you would like to create a token on a server side.
 * Omise doesn't allow you to create a token from a server side if you don't have a PCI-DSS certification
 *
 * - https://www.omise.co/security-best-practices
 * - https://www.omise.co/security-overview
 *
 * The below example is for someone who would like to use this library on a frontend only.
 * If you use this library to create tokens on a server-side and your account might be blocked by Omise,
 *
 *
 * This example doesn't use a real credit card number, It's a test card from Omise document.
 * https://www.omise.co/api-testing
 */

const client = require('./getOmiseClient');

async function run() {
  // Create a token
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

  console.log('token id', newToken.id);

  // Retrieve a token
  const token = await client.token.retrieve(newToken.id);
  if (token.object === 'error') throw token;

  console.log('token', token);
}

run().catch(console.error);
