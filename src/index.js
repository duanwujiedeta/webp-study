
function getComponent() {


  return import('lodash').then(({ default: _ }) => {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack', '中文'], ' ');
    return element;
  })

}

getComponent().then((component) => {
  document.body.appendChild(component);
});