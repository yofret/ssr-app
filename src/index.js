import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore();

  // Logic to initialize and data into the store

  res.send(renderer(req, store));
});

app.listen(3001, () => {
  console.log('listening on port 3001');
});