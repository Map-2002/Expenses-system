import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList=(props) => {

    if(props.items.length==0)
    return (
          <div className="expenses-list__fallback">
          <h1>No Items Found.</h1>
          </div>
    );
    return (
        <div className="expenses-list">
        {props.items.map((expese) => (
            <ExpenseItem
              keys={expese.id}
              title={expese.title}
              amount={expese.amount}
              date={expese.date}
            />
          ))}
        </div>
    );
}
export default ExpensesList