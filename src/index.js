async function getComponent() {
  const element = document.createElement('div');
  const {default:_} = await import('lodash');

  element.innerHTML = _.join(['Hello', 'webpack', '中文'], ' ');
  return element;

}

getComponent().then((component) => {
  document.body.appendChild(component);
});