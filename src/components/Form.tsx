import { FormEvent, useRef } from "react";
import Button from "./Button/Button";

const Form = () => {
  const name = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);
  const person: { name: string; age: number } = { name: "", age: 0 };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (name.current) {
      person.name = name.current?.value;
    }
    if (age.current) {
      person.age = +age.current?.value;
    }

    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={name} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Age
        </label>
        <input
          id="name"
          type="number"
          ref={age}
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
