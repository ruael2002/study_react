import React , {useState} from "react";
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    
    const yearHandler = (event) => {

        props.onFilerYear(event.target.value);
    }
        

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select onChange={yearHandler} value={props.seletecd}>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                </select>
            </div>
        </div>
    )
}


export default ExpenseFilter;