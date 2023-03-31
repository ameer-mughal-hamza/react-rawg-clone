import { ChangeEvent, FormEvent, useRef, useState } from "react";
import Button from "./Button/Button";

interface IPerson {
  name: string;
  age: number;
}

const Form = () => {
  // const name = useRef<HTMLInputElement>(null);
  // const age = useRef<HTMLInputElement>(null);
  // const person: { name: string; age: number } = { name: "", age: 0 };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  const [person, setPerson] = useState<IPerson>({ name: "", age: 0 });

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={person.name}
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Age
        </label>
        <input
          id="name"
          type="number"
          value={person.age}
          onChange={(event) =>
            setPerson({ ...person, age: +event.target.value })
          }
          min={18}
          max={80}
          maxLength={2}
          className="form-control"
        />
      </div>
      <Button color="primary" size="lg" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
