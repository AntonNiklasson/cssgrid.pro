/* eslint-disable global-require, import/no-dynamic-require */

module.exports = ['helloworld', 'rows-and-columns', 'gap'].map(c =>
  require(`./${c}.js`)
)
