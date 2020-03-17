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
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore(req);

  const components = matchRoutes(routes, req.path);

  const promises = components
    .map(({ route }) => (route.loadData ? route.loadData(store) : null))
    .map((promise) => {
      if (promise) {
        // always resolve inner promise
        return new Promise((resolve) => {
          promise.then(resolve).catch(resolve);
        });
      }

      return null;
    });

  Promise.all(promises)
    .then(() => {
      const context = {};
      const content = renderer(req, store, context);

      if (context.url) {
        return res.redirect(302, context.url);
      }
      if (context.notFound) {
        return res.status(404);
      }

      return res.send(content);
    });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
