import _ from 'lodash';
import numRef from './ref.json';

var cur = ".";

var reqContent = require(cur + '/ref.json'); // 当request含有表达式的时候，require会创建一个上下文作为解析的地址,并且会为目录生成一个 map （映射）对象列表
console.log(reqContent);

/* 
使用 require.context 来创建上下文：
require.context('./test', false, /\.test\.js$/);
//（创建出）一个 context，其中文件来自 test 目录，request 以 `.test.js` 结尾。

require.context('../', true, /\.stories\.js$/);
// （创建出）一个 context，其中所有文件都来自父文件夹及其所有子级文件夹，request 以 `.stories.js` 结尾。
*/

export function numToWord(num) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    },
    ''
  );
}

export function wordToNum(word) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    },
    -1
  );
}