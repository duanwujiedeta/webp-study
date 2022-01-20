import _ from 'lodash';
import printMe from './print';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement("button");


  element.innerHTML = _.join(['Hello', 'webpack', '中文'], ' ');


  btn.innerHTML = "Click me an check the console!"
  btn.onclick = printMe;

  element.appendChild(btn);


  return element;
}

document.body.appendChild(component());