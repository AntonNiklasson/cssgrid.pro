import _ from 'lodash/fp'

export const toString = tree => {
  if (!tree) return null

  return _.pipe(
    _.keys,
    _.reduce((ruleString, selector) => {
      const propertyStrings = _.pipe(
        _.keys,
        _.reduce(
          (propertyString, property) =>
            `${propertyString}${propertyString.length ? ' ' : ''}${property}: ${
              tree[selector].properties[property].value
            };`,
          ''
        )
      )(tree[selector].properties)
      return `${ruleString}${selector} { ${propertyStrings} }`
    }, '')
  )(tree)
}

export const update = (tree, selectorToUpdate, propertyNameToUpdate, value) =>
  _.pipe(
    _.keys,
    _.reduce((newTree, selector) => {
      const rule = tree[selector]

      if (selector !== selectorToUpdate) {
        return {
          ...newTree,
          [selector]: rule,
        }
      }

      newTree[selector] = {
        ...rule,
        properties: _.pipe(
          _.keys,
          _.reduce((newProperties, propertyKey) => {
            const property = rule.properties[propertyKey]

            if (propertyKey !== propertyNameToUpdate) return property

            newProperties[propertyNameToUpdate] = {
              ...property,
              value,
            }

            return newProperties
          }, {})
        )(rule.properties),
      }

      return newTree
    }, {})
  )(tree)
