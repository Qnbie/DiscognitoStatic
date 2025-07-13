import { handler } from './build/handler.js';
import express from 'express';
import path from 'path';
import https from 'https';
import fs from 'fs';

const privateKeyPath = process.env.SSL_CERT_PRIV_KEY
if (!privateKeyPath){
  console.log("SSL Private key is missing")
}

const certPath = process.env.SSL_CERT
if (!certPath){
  console.log("SSL Cert is missing")
}

const privateKey = fs.readFileSync(privateKeyPath);
const domainCert = fs.readFileSync(certPath);
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
