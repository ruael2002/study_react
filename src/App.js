import React, {useState} from "react";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
];
const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

const onAddExpense = (expense) => {
  console.log(expense);
  setExpenses((prevExpenses)=> {
    let test = [expense ,...prevExpenses];
    console.log(test);
    return test; 
  });
}

return (
    <div>
      <NewExpense onAddExpense={onAddExpense}/>
      <Expense expenses={expenses}/>
    </div>
  );
}

export default App;
