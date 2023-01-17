import React, { useState } from "react";

export default function Form({ addFinance }) {
  const [cant, setCant] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addFinance({ desc, cant: Number(cant) });
    setDesc("");
    setCant("");
  };

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <div className="column is-half">
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              value={desc}
              placeholder="Description"
              onChange={(e) => setDesc(e.target.value)}
              type="text"
              data-testid="input-desc"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-align-justify" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              value={cant}
              placeholder="Amount"
              onChange={(e) => setCant(e.target.value)}
              type="number"
              data-testid="input-amount"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-money-bill-alt" />
            </span>
          </p>
        </div>
        <button className="button is-primary" type="submit" value="Enviar">
          Send
        </button>
      </div>
    </form>
  );
}
