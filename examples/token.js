/**
 * Please be careful if you would like to create a token on a server side.
 * Omise doesn't allow you to create a token from a server side if you don't have a PCI-DSS certification
 *
 * - https://www.omise.co/security-best-practices
 * - https://www.omise.co/security-overview
 *
 * The below example is for someone who would like to use this library on a frontend.
 * If you use this library to create tokens on a server-side and your account is blocked by Omise,
 * It's your fault that you don't read any documents and agreements.
 *
 *
 * This example doesn't use a real credit card number, It's a test card from Omise document.
 * https://www.omise.co/api-testing
 */

const client = require('./getOmiseClient');

client.token
  .create({
    card: {
      name: 'John Doe',
      number: '4242 4242 4242 4242',
      expiration_month: 12,
      expiration_year: 2022,
      security_code: '123',
    },
  })
  .then((token) => {
    if (token.object === 'error') {
      console.error('Got error', token);
      return;
    } else {
      console.log('Token id', token.id);
    }
  })
  .catch((error) => console.error(error));
