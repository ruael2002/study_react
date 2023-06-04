import React , { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';


const NewExpense = (props) => {
    const saveDate = (saveDate) => {
        const inputDate = {
            ...saveDate,
            id: Math.random().toString()
        }
        props.onAddExpense(inputDate);
        console.log(inputDate);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveDate}/>
        </div>
    )
};

export default NewExpense;