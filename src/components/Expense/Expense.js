import React , {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import './Expense.css';
import Card from "../UI/Card";
const Expense = (props) => { 
    const [filterYear, setFilterYear] = useState('2020');

    const onFilerYear = (year) => {
        setFilterYear(year);
    }

    const filteredExpenses = props.expenses.filter(expense =>{
        return expense.date.getFullYear().toString() === filterYear;
    });

    let filterJsxCode = <p>No data</p>;

    if(filteredExpenses.length > 0){
        filterJsxCode = filteredExpenses.map((expenses) => (
            <ExpenseItem  
            key={expenses.id}
            title={expenses.title} 
            amount={expenses.amount} 
            date={expenses.date}
            />
        ))
    }
    
    return (
        <Card className="expenses">
            <ExpenseFilter seletecd={filterYear} onFilerYear={onFilerYear}/>
            {filterJsxCode}
        </Card>
    )
}   

export default Expense;