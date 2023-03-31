import React from "react";
import Button from "../../../components/Button/Button";
import { Expense } from "../../../models/Expense";
import { formatCurrency } from "../../../utilities/formatCurrency";

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  return (
    <>
      {expenses.length > 0 && (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense: Expense) => {
              return (
                <tr key={expense.id}>
                  <td>{expense.id}</td>
                  <td>{expense.description}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.category}</td>
                  <td>
                    <Button
                      onClick={() => onDelete(expense.id)}
                      color="danger"
                      outline={true}
                      type="button"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Total</td>
              <td>
                {formatCurrency(
                  expenses.reduce((acc, expense) => expense.amount + acc, 0)
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </>
  );
};

export default ExpenseList;
