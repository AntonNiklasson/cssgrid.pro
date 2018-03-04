import _ from 'lodash/fp'

export const toString = tree => {
  if (!tree) return ''

  return _.pipe(
    _.keys,
    _.reduce((blob, selectorKey) => {
      const propertiesBlob = _.pipe(
        _.get('properties'),
        _.mapValues('value'),
        _.toPairs,
        _.map(_.join(': ')),
        _.map(str => `${str};`),
        _.join(' ')
      )(tree[selectorKey])

      return `${blob ? `${blob} ` : ''}${selectorKey} { ${propertiesBlob} }`
    }, null)
  )(tree)
}

export const updateTree = (tree, selector, property, value) =>
  _.update(selector, _.update(['properties', property], _.set('value', value)))(
    tree
  )
