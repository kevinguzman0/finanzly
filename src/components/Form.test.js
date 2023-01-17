import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Form from "./Form";

describe("Form", () => {
  test("Add finance", () => {
    const addFinanzas = jest.fn();
    const prevent = jest.fn();

    const component = render(<Form addFinance={addFinanzas} />);

    const inputDesc = component.getByTestId("input-desc");
    fireEvent.change(inputDesc, { target: { value: "description" } });

    const inputAmount = component.getByTestId("input-amount");
    fireEvent.change(inputAmount, { target: { value: "200" } });

    const form = component.getByTestId("form");
    fireEvent.submit(form, { preventDefault: prevent });

    expect(addFinanzas.mock.calls).toEqual([
      [
        {
          desc: "description",
          cant: 200,
        },
      ],
    ]);
  });
});
