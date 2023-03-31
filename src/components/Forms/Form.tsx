import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FieldValue, FieldValues } from "react-hook-form/dist/types";
import Button from "../Button/Button";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be atleast 3 characters.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          {...register("age")}
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
