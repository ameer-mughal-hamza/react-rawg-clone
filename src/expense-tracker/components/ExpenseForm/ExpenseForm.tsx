import Button from "../../../components/Button/Button";
import { z as ZOD } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../../../data/categories";
import { Expense } from "../../../models/Expense";

interface Props {
  onSubmit: (data: FormData) => void;
}

const schema = ZOD.object({
  description: ZOD.string()
    .min(3, { message: "The description should be 3 characters long." })
    .max(50, {
      message: "The description should be less than 255 characters.",
    }),
  amount: ZOD.number({ invalid_type_error: "The amount field is required." })
    .min(0.01, { message: "The amount should be greater than 0" })
    .max(100_000, { message: "The amount should be less than 100000" }),
  category: ZOD.enum(categories, {
    errorMap: () => ({
      message: "The category is required.",
    }),
  }),
});

type FormData = ZOD.infer<typeof schema>;

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  console.log(errors);

  return (
    <>
      <form
        className="mb-3"
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            placeholder="Enter description here"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            name="amount"
            placeholder="Enter amount here"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="categories" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            name="category"
            id="category"
            className="form-select"
          >
            <option value=""></option>
            {categories.map((category: string) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <Button color="primary" type="submit" disabled={!isValid}>
          Create Expense
        </Button>
      </form>
    </>
  );
};

export default ExpenseForm;
