import React from 'react';
import ReactDOM from 'react-dom';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  main: {
    color: 'red'
  }
});

const app = <div className={css(styles.main)}>Hello, React!</div>;

if (typeof ISOMORPHIC_WEBPACK === 'undefined') {
  StyleSheet.rehydrate(window.renderedClassNames);
  ReactDOM.render(app, document.getElementById('app'));
}

export default app;
