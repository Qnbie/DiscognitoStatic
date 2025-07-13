import { handler } from './build/handler.js';
import express from 'express';
import path from 'path';

const app = express();

// Serve static files from the 'build' directory
app.use(express.static(path.resolve('./build')));

// Handle all other requests with the SvelteKit handler
app.use(handler);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
