import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";

describe("App", () => {
  test("Interact with store", () => {
    const prevent = jest.fn();
    const reducer = jest.fn().mockReturnValue({
      finances: [{ desc: "lala", cant: 150 }],
    }); // initState in reducer
    const store = createStore(reducer);
    const component = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputDesc = component.getByTestId("input-desc");
    const inputAmount = component.getByTestId("input-amount");
    const form = component.getByTestId("form");
    const button = component.getAllByTestId("button-test").at(0);
    const list = component.getAllByTestId("table-finances").at(0);
    const title = component.getByTestId("title-test");

    fireEvent.change(inputDesc, { target: { value: "lele" } });
    fireEvent.change(inputAmount, { target: { value: "200" } });
    fireEvent.submit(form, { preventDefault: prevent });
    fireEvent.click(button);

    const [a, ...rest] = reducer.mock.calls;

    expect(rest).toEqual([
      [
        { finances: [{ desc: "lala", cant: 150 }] },
        { type: "ADD", payload: { desc: "lele", cant: 200 } },
      ],
      [
        { finances: [{ desc: "lala", cant: 150 }] },
        { type: "DELETE", index: 0 },
      ],
    ]);
    expect(list).toHaveTextContent(/lala/i);
    expect(title).toHaveTextContent(/finanzly/i);
  });
});
