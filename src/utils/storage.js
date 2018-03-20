import _ from "lodash/fp";

// Namespace all keys
const key = name => `cssgrid.pro-${name}`;

// Minimal Abstraction for the Persistent Layer.
const get = k => {
  return localStorage.getItem(k);
};
const set = (k, payload) => {
  localStorage.setItem(k, payload);
};

/*
 * Levels
 */
const getLevel = () => parseInt(get(key("level")));

const setLevel = level => {
  set(key("level"), level);
};

/*
 * Field Values
 */
const getFieldValues = () => JSON.parse(get(key("fields"))) || [];

const setFieldValue = (selector, property, value) => {
  set(
    key("fields"),
    _.pipe(
      _.filter(
        f =>
          f.selector !== selector &&
          f.property !== property &&
          f.value !== value
      ),
      _.concat([{ selector, property, value }]),
      JSON.stringify
    )(getFieldValues() || [])
  );
};

/*
 * Help Modal
 */
const setHelpModalState = state => {
  set(key("help"), state);
};
const getHelpModalState = () => get(key("help")) === "true";

/*
 * Export a plain object
 */
export default {
  getLevel,
  setLevel,
  setFieldValue,
  getFieldValues,
  setHelpModalState,
  getHelpModalState
};
