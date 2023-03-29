import { useState } from "react";

interface Props {
  name?: string[];
  selectedItem?: number;
  onSelectedItem: (index: number) => void;
}

function ListGroup({ name, selectedItem, onSelectedItem }: Props) {
  // const listItems = name.map((name: string, index: number) => (
    // <li
    //   onClick={() => onSelectedItem(index)}
    //   className={
    //     index === selectedItem ? "list-group-item active" : "list-group-item"
    //   }
    // >
      // {name}
    // </li>
  // ));
  // return (
    <>
      <h1>List Group</h1>
      {/* {name.length === 0 ? <p>There are no items in the list.</p> : null} */}
      {/* <ul className="list-group">{listItems}</ul> */}
    </>
  // );
}

export default ListGroup;
