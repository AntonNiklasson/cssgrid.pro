Object.defineProperty(window, "localStorage", {
  value: (() => {
    let store = {};

    return {
      reset: () => {
        store = {};
      },
      _dump: () => store,

      getItem: key => store[key] || null,
      setItem: (key, value) => {
        store[key] = value;
      }
    };
  })()
});
