import React from "react";
import Button from "../Button/Button";

const ExpenseItem = () => {
  return (
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>
        <Button color="danger" type="button" outline={true}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ExpenseItem;
