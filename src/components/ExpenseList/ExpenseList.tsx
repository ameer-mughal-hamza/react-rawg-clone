import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpenseList = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <ExpenseItem></ExpenseItem>
        <td></td>
        <td></td>
        <td></td>
        <td scope="row">Total</td>
        <td scope="row">$250</td>
      </tbody>
    </table>
  );
};

export default ExpenseList;
