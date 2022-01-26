const {
  file,
  parse
} = require('./globals.js');

console.log(file);
console.log(parse);

function component() {
  const element = document.createElement('div');

  element.innerHTML = join(['Hello', 'webpack'], ' ');

  // 假设我们处于 `window` 上下文
  this.alert('Hmmm, this probably isn\'t a great idea...')


  return element;
}

document.body.appendChild(component());