import _ from 'lodash/fp'

export const toString = tree => {
  if (!tree) return null

  const propertyToString = property =>
    property.key && property.value ? `${property.key}: ${property.value};` : ''
  const ruleToString = rule =>
    `${rule.selector} { ${_.flow(_.map(propertyToString), _.join(' '))(
      rule.properties
    )} }`

  return _.join(' ')(_.flow(_.map(ruleToString))(tree))
}

export const update = (tree, selector, propertyName, value) =>
  _.map(rule => {
    if (rule.selector !== selector) return rule

    return {
      ...rule,
      properties: _.map(property => {
        if (property.key !== propertyName) return property

        return {
          ...property,
          value,
        }
      })(rule.properties),
    }
  })(tree)
