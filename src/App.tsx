import { useState } from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList/ExpenseList";
import { Expense } from "./models/Expense";

function App() {
  const [category, setcategory] = useState<string>();
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, description: "aaa", amount: 100, category: "Groceries" },
    { id: 2, description: "bbb", amount: 200, category: "Utilities" },
    { id: 3, description: "ccc", amount: 300, category: "Entertainment" },
    { id: 4, description: "aaa", amount: 100, category: "Groceries" },
  ]);

  const handleSubmit = (data: any) => {
    data.id = expenses.length + 1;
    setExpenses([...expenses, data]);
  };

  const visibleExpenses = category
    ? expenses.filter((expense) => expense.category === category)
    : expenses;

  return (
    <>
      <ExpenseForm onSubmit={handleSubmit}></ExpenseForm>
      <hr />
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => setcategory(category)} />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id: number) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
}

export default App;
