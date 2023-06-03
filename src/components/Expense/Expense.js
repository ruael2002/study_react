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

    return (
        <Card className="expenses">
            <ExpenseFilter seletecd={filterYear} onFilerYear={onFilerYear}/>
            <ExpenseItem
            title={props.expenses[0].title}
            amount={props.expenses[0].amount}
            date={props.expenses[0].date}
        />
        <ExpenseItem
            title={props.expenses[1].title}
            amount={props.expenses[1].amount}
            date={props.expenses[1].date}
        />
        <ExpenseItem
            title={props.expenses[2].title}
            amount={props.expenses[2].amount}
            date={props.expenses[2].date}
        />
        <ExpenseItem
            title={props.expenses[3].title}
            amount={props.expenses[3].amount}
            date={props.expenses[3].date}
        />
      </Card>
    )
}   

export default Expense;