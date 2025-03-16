import { Stack, TextField } from "@mui/material";
import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import { FormViewData } from "./FormView";

interface RatingViewProps {
  control: Control<FormViewData>;
  groupIndex: number;
  categoryIndex: number;
  questionIndex: number;
  register: UseFormRegister<FormViewData>;
}

function RatingView({control, groupIndex, categoryIndex, questionIndex, register}: RatingViewProps) {
  const {fields: ratings} = useFieldArray({
    control,
    name: `groups.${groupIndex}.categories.${categoryIndex}.questions.${questionIndex}.ratings`,
  });
  return (
    <Stack>
      {ratings.map((rating, ratingIndex) => (
        <Stack key={ratingIndex}>
          <TextField {...register(`groups.${groupIndex}.categories.${categoryIndex}.questions.${questionIndex}.ratings.${ratingIndex}.text`)} label="Rating text" />
        </Stack>
      ))}
    </Stack>
  )
}
export default RatingView;