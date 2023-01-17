import reducer, { add, remove } from "./finances";

describe("Finance Duck", () => {
  // Test Action creator from reducer ( Redux)
  describe("Action creators", () => {
    test("Add", () => {
      const resultado = add(1);
      expect(resultado).toEqual({
        type: "ADD",
        payload: 1,
      });
    });

    test("Delete", () => {
      const resultado = remove(1);
      expect(resultado).toEqual({
        type: "DELETE",
        index: 1,
      });
    });
  });

  describe("Reducer", () => {
    test("Add reducer", () => {
      const resultado = reducer([1], {
        type: "ADD",
        payload: 2,
      });
      expect(resultado).toEqual([1, 2]);
    });

    test("Delete reducer", () => {
      const resultado = reducer([1, 2, 3], {
        type: "DELETE",
        index: 0,
      });
      expect(resultado).toEqual([2, 3]);
    });

    test("Default reducer", () => {
      const resultado = reducer(1, {
        type: "NULL",
      });
      expect(resultado).toEqual(1);
    });
  });
});
