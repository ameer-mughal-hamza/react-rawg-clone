import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList/ExpenseList";
import { Expense } from "./models/Expense";
import "./App.module.css";
import Button from "./components/Button/Button";
import axiosClient, { CanceledError } from "./services/api-client";
import userService, { User } from "./services/userService";
import useUsers from "./hooks/useUsers";

function App() {
  const { users, error, isLoading, setError, setUsers, setLoading } =
    useUsers();
  const [category, setcategory] = useState<string>();
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, description: "aaa", amount: 100, category: "Groceries" },
    { id: 2, description: "bbb", amount: 200, category: "Utilities" },
    { id: 3, description: "ccc", amount: 300, category: "Entertainment" },
    { id: 4, description: "aaa", amount: 100, category: "Groceries" },
  ]);

  useEffect(() => {}); // Runs on every render
  useEffect(() => {}, []); // Runs only on initial render
  useEffect(() => {}, [category]); // Runs only when category changes

  const handleSubmit = (data: any) => {
    data.id = expenses.length + 1;
    setExpenses([...expenses, data]);
  };

  const visibleExpenses = category
    ? expenses.filter((expense) => expense.category === category)
    : expenses;

  const addUser = async () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Ameer Hamza" };
    setUsers([newUser, ...users]);
    const request = userService.addUser(newUser);
    request
      .then((res) => setUsers([res.data, ...users]))
      .catch((err) => {
        setError((err as AxiosError).message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers: User[] = [...users];
    const updatedUser: User = { ...user, name: user.name + "!" };
    setUsers(users.map((u: User) => (u.id === user.id ? updatedUser : u)));
    userService.updateUser(updatedUser).catch((err) => {
      setError((err as AxiosError).message);
      setUsers(originalUsers);
    });
  };

  const deleteUser = async (id: number) => {
    const originalUsers = [...users];
    setUsers(users.filter((user) => user.id !== id));
    userService.delete(id).catch((err) => {
      setError((err as AxiosError).message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="alert alert-danger">{error}</p>}
      {isLoading && (
        <>
          <div className="loader">
            <div className="spinner spinner-border"></div>
          </div>
        </>
      )}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary btn-sm mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {/* <ExpenseForm onSubmit={handleSubmit}></ExpenseForm>
      <hr />
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => setcategory(category)} />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id: number) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      /> */}
    </>
  );
}

export default App;
function getAllUsers(): { res: any; cancel: any } {
  throw new Error("Function not implemented.");
}
