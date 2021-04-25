const { OmiseClient } = require('../lib');

const publicKey = 'YOUR_PUBLIC_KEY';
const secretKey = 'YOUR_SECRET_KEY';

const client = new OmiseClient({ publicKey, secretKey });

module.exports = client;
