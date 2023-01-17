import React from "react";

export default function Dashboard({ value }) {
  return (
    <div className="column is-half">
      <div className="box">
        <p>Total</p>
        <strong data-testid="strong-value">{value}</strong>
      </div>
    </div>
  );
}
