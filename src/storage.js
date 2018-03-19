// Namespace all keys
const key = name => `cssgrid.pro-${name}`;

// Minimal Abstraction for the Persistent Layer.
const get = k => {
  const raw = localStorage.getItem(k);
  return JSON.parse(raw);
};
const set = (k, payload) => {
  const raw = JSON.stringify(payload);
  localStorage.setItem(k, raw);
};

/*
 * Levels
 */
const getLevel = () => parseInt(set(key("level")), 10);

const setLevel = id => {
  set(key("level"), id);
};

/*
 * Field Values
 */
const getFieldValues = () => get(key("fields"));

const setFieldValue = (selector, property, value) => {
  const storedFields = getFieldValues() || [];

  const fieldData = { selector, property, value };

  set(key("fields"), [...storedFields, fieldData]);
};

/*
 * Export a plain object
 */
export default {
  getLevel,
  setLevel,
  setFieldValue,
  getFieldValues
};
