import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  const button = document.createElement("button");
  const br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);

  // Note that because a network request is involved,some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    const print = module.default;// 异步懒加载，必须指向模块的 .default 值，因为是被 promise 处理过的实际 module 对象。

    print();
  })

  return element;
}

document.body.appendChild(component());