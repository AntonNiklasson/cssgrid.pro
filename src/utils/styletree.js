import {
  pipe,
  keys,
  map,
  reduce,
  get,
  set,
  update,
  mapValues,
  toPairs,
  join
} from "lodash/fp";

export const toString = tree => {
  if (!tree) return "";

  return pipe(
    keys,
    reduce((blob, selectorKey) => {
      const propertiesBlob = pipe(
        get("properties"),
        mapValues("value"),
        toPairs,
        map(join(": ")),
        map(str => `${str};`),
        join(" ")
      )(tree[selectorKey]);

      return `${blob ? `${blob} ` : ""}${selectorKey} { ${propertiesBlob} }`;
    }, null)
  )(tree);
};

export const updateTree = (tree, selector, property, value) =>
  update(
    selector,
    update(
      ["properties", property],
      pipe(
        set("value", value),
        set(
          "valid",
          tree[selector].properties[property].input.regex.test(value)
        )
      )
    )
  )(tree);
