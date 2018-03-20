import storage from "../storage"; // eslint-disable-line

describe.only("Storage Layer", () => {
  beforeEach(() => {
    localStorage.reset();
  });

  describe("Field Values", () => {
    it("should store a field value", () => {
      storage.setFieldValue(".selector", ".property", "aaa");
      storage.setFieldValue(".selector", ".property", "bbb");

      expect(window.localStorage._dump()).toEqual({
        "cssgrid.pro-fields": JSON.stringify([
          {
            selector: ".selector",
            property: ".property",
            value: "bbb"
          }
        ])
      });
    });
  });
});
