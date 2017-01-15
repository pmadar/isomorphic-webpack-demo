import {
  renderToString
} from 'react-dom/server';
import {StyleSheetServer} from 'aphrodite';

const renderFullPage = ({html, css}) => {
  // eslint-disable-next-line no-restricted-syntax
  return `
  <!doctype html>
  <html>
    <head>
      <style data-aphrodite>${css.content}</style>
    </head>
    <body>
      <div id='app'>${html}</div>
      <script>window.renderedClassNames = ${JSON.stringify(css.renderedClassNames)};</script>
      <script src='/static/app.js'></script>
    </body>
  </html>
  `;
};

const handleRoute = (res) => {
  // eslint-disable-next-line global-require
  const app = require('./../app').default;
  const rendered = StyleSheetServer.renderStatic(() => {
    return renderToString(app);
  });

  res
    .status(200)
    .send(renderFullPage(rendered));
};

export default (req, res) => {
  handleRoute(res);
};
