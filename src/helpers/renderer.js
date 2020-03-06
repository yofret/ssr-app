import React, { Fragment } from 'react';
import { renderRoutes } from 'react-router-config';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import routes from '../client/routes/routes';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Fragment>
          {renderRoutes(routes)}
        </Fragment>
      </StaticRouter>
    </Provider>
  );

  return `
    <html>
      <head>
        <title>React SSR</title>
        <link rel="stylesheet" type="text/css" href="core.css">
      </head>

      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
