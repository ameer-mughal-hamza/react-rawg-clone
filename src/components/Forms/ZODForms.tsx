import Button from "../Button/Button";
import { z as ZOD } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";

const schema = ZOD.object({
  name: ZOD.string()
    .min(1, { message: "The name field is required." })
    .min(3, { message: "Name must be atleast 3 characters." }),
  age: ZOD.number({ invalid_type_error: "The age field is required." }).min(
    18,
    { message: "Age must be atleast 18." }
  ),
});

type FormData = ZOD.infer<typeof schema>;

const ZODForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors?.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          min={18}
          max={80}
          maxLength={2}
          className="form-control"
        />
        {errors?.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <Button color="primary" disabled={!isValid} size="lg" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ZODForms;
