import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Finances from "./Finances";

describe("Finances", () => {
  test("Call deleteFinance onClick", () => {
    const finances = [
      { desc: "Finance 1", cant: 100 },
      { desc: "Finance 2", cant: 80 },
    ];
    const deleteFinance = jest.fn();

    const component = render(
      <Finances finances={finances} deleteFinance={deleteFinance} />
    );

    const button = component.getAllByTestId("button-test").at(0);
    fireEvent.click(button);

    expect(deleteFinance.mock.calls).toEqual([[0]]);

    const list = component.getAllByTestId("table-finances").at(0);
    expect(list).toHaveTextContent(/finance 1/i);
  });
});
