import { Button, Stack, TextField } from "@mui/material";
import { FormViewData } from "./FormView";
import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import QuestionView from "./QuestionView";

interface CategoryViewProps {
  control: Control<FormViewData>;
  groupIndex: number;
  register: UseFormRegister<FormViewData>;
}
function CategoryView({ control, groupIndex, register }: CategoryViewProps) {
  const { fields: categories, append: addCategory, remove: removeCategory } = useFieldArray({
    control,
    name: `groups.${groupIndex}.categories`,
  });

  return (
    <Stack>
      {categories.map((category, categoryIndex) => (
        <Stack key={categoryIndex} padding={"2rem"} spacing={"2rem"}>
          <TextField {...register(`groups.${groupIndex}.categories.${categoryIndex}.title`)} />
          <QuestionView control={control} groupIndex={groupIndex} categoryIndex={categoryIndex} register={register} />
          <Button onClick={() => removeCategory(categoryIndex)}>Remove category</Button>
        </Stack>
      ))}
      <Button onClick={() => addCategory({id: Math.floor(Math.random() * -10000), title: "", questions: []})}>Add Category</Button>
    </Stack>
  )
}
export default CategoryView;