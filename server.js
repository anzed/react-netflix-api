/* eslint no-console: 0 */
import path from 'path';
import express from 'express';
import handleRender from './server/renderHandler';

const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '/build')));
app.get('/*', handleRender);

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }
  console.info('Listening on port %s...', port);
});
