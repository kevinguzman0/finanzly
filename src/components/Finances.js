import React from "react";

export default function Finances({ finances, deleteFinance }) {
  return (
    <div className="column is-half">
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {finances.map((x, i) => (
            <tr key={i} data-testid="table-finances">
              <td>{x.desc}</td>
              <td>{x.cant}</td>
              <td>
                <button
                  className="button is-warning"
                  onClick={() => deleteFinance(i)}
                  data-testid="button-test"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
