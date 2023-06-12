import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isediting, setisediting] = useState(false);
  const savedatahandler = (data) => {
    const ExpenseData = { ...data, id: Math.random().toString() };
    props.AddexpenseData(ExpenseData);
    setisediting(false);
  };
  const starteditinghandler = () => {
    setisediting(true);
  };
  const stopeditinghandler = () => {
    setisediting(false);
  };
  return (
    <div className="new-expense">
      {!isediting && <button onClick={starteditinghandler}>Add Expense</button>}
      {isediting && (
        <ExpenseForm
          OnSaveExpenseData={savedatahandler}
          onCancel={stopeditinghandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
