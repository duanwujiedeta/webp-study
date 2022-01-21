async function getComponent() {
  const element = document.createElement('div');
  const {default:_} = await import('lodash');

  element.innerHTML = _.join(['Hello', 'webpack', '中文'], ' ');
  return element;

}

import(/* webpackPreload: true */ "./test.js");/* preload会在父级加载的时候并行加载 */

getComponent().then((component) => {
  document.body.appendChild(component);
});