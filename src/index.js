async function getComponent() {
  const element = document.createElement('div');
  const {default:_} = await import('lodash');

  element.innerHTML = _.join(['Hello', 'webpack', '中文'], ' ');
  return element;

}

import(/* webpackPrefetch: true */ "./test.js");/* 会在header头部生成， <link ref="prefetch" href="src_test_js.bundle.js"> */

getComponent().then((component) => {
  document.body.appendChild(component);
});