/* eslint-disable global-require, import/no-dynamic-require */

const challenges = ['helloworld', 'rows-and-columns', 'gap'];

module.exports = challenges.map(c => require(`./${c}.js`));
