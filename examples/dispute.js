const client = require('./getOmiseClient');
const fs = require('fs');

async function run() {
  const newDispute = await client.dispute.create('CHARGE_ID');

  if (newDispute.object === 'error') throw newDispute;

  const document = await client.dispute.documentsOf(newDispute.id);
  const uploadedDocument = await document.upload({
    file: fs.readFileSync('YOUR_FILEPATH'),
  });

  if (uploadedDocument.object === 'error') throw uploadedDocument;
  console.log(uploadedDocument);
}

run().catch(console.error);
