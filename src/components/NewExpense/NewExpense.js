import React , { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';


const NewExpense = (props) => {
    const [expenseForm, setExpenseForm] = useState(true);
    const saveDate = (saveDate) => {
        const inputDate = {
            ...saveDate,
            id: Math.random().toString()
        }
        props.onAddExpense(inputDate);
        console.log(inputDate);
    }

    const changeFlag = () => {
        setExpenseForm(!expenseForm);
    }

    return (
        <div className="new-expense">
            {expenseForm && <button onClick={changeFlag}>Add Expense Form </button>}
            {!expenseForm && <ExpenseForm onSaveExpenseData={saveDate} onChangeFlag={changeFlag}/>}
        </div>
    )
};

export default NewExpense;