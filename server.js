import { handler } from './build/handler.js';
import express from 'express';
import path from 'path';
import https from 'https';
import fs from 'fs';

const privateKey = fs.readFileSync('./cert/private.key.pem');
const domainCert = fs.readFileSync('./cert/domain.cert.pem');
const credentials = {
  key: privateKey,
  cert: domainCert
};

const app = express();

// Serve static files from the 'build' directory
app.use(express.static(path.resolve('./build')));

// Handle all other requests with the SvelteKit handler
app.use(handler);

https.createServer(credentials, app).listen(443, () => {
  console.log('App listening securely on port 443');
});
