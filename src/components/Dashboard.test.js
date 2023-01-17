import { render } from "@testing-library/react";
import React from "react";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  test("Show value", () => {
    const component = render(<Dashboard value={100} />);
    expect(component.getByTestId("strong-value").textContent).toBe("100");
  });
});
