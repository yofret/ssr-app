import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import logger from 'morgan';
import routes from './client/routes/routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(logger('dev', { stream: { write: (msg) => console.log(msg) } }));

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3001';
    return opts;
  }
}));

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore(req);

  const components = matchRoutes(routes, req.path);

  const promises = components.map(({ route }) => (route.loadData ? route.loadData(store) : null));

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3001, () => {
  console.log('listening on port 3001');
});
