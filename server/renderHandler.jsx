import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';
import App from '../src/components/App';

const renderFullPage = (html, preloadedState) => (`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Server!!1</title>
  </head>
  <body>
    <div id="root">${html}</div>
    <script>
      window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    </script>
    <script src="vendor.js"></script>
    <script src="styles.js"></script>
    <script src="app.js"></script>
  </body>
  </html>
`);

const handleRender = (req, res) => {
  const store = configureStore();
  const context = {};
  const app = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const html = renderToString(app);

  if (context.url) {
    return res.redirect(context.url);
  }

  const preloadedState = store.getState();

  return res.send(renderFullPage(html, preloadedState));
};

export default handleRender;
