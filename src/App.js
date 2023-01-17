import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Finances from "./components/Finances";
import Form from "./components/Form";
import { add, remove } from "./reducers/finances";
import { fetchUsers } from "./reducers/users";

function Title() {
  return (
    <h2 className="title" data-testid="title-test">
      Finanzly
    </h2>
  );
}

function App({ finances, addFinance, deleteFinance, fetchUsers }) {
  const total = finances.reduce((acc, el) => acc + el.cant, 0);
  return (
    <div className="section is-medium">
      <div className="container">
        <Title />
        {/* <button onClick={fetchUsers}>Fetch Users</button> */}
        <Form addFinance={addFinance} />
        <Dashboard value={total} />
        <Finances finances={finances} deleteFinance={deleteFinance} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  addFinance: (finanza) => dispatch(add(finanza)),
  deleteFinance: (index) => dispatch(remove(index)),
  fetchUsuarios: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
