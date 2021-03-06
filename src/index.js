import merge from 'webpack-merge';
import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  const element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack',
    '5 cube is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());