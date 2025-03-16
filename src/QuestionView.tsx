import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import { FormViewData } from "./FormView";
import { Button, Stack, TextField } from "@mui/material";
import RatingView from "./RatingView";

interface QuestionProps {
  control: Control<FormViewData>;
  groupIndex: number;
  categoryIndex: number;
  register: UseFormRegister<FormViewData>;
}

function QuestionView({ control, groupIndex, categoryIndex, register }: QuestionProps) {
  const { fields: questions, append: addQuestion, remove: removeQuestion } = useFieldArray({
    control,
    name: `groups.${groupIndex}.categories.${categoryIndex}.questions`,
  });

  return (
    <Stack>
      {questions.map((questions, questionIndex) => (
        <Stack key={questionIndex} padding={"2rem"} spacing={"2rem"}>
          <TextField {...register(`groups.${groupIndex}.categories.${categoryIndex}.questions.${questionIndex}.title`)} label={"Question title"} />
          <RatingView control={control} groupIndex={groupIndex} categoryIndex={categoryIndex} questionIndex={questionIndex} register={register} />
          <Button onClick={() => removeQuestion(questionIndex)}>Remove Question</Button>
        </Stack>
      ))}
      <Button onClick={() => addQuestion({
        id: Math.floor(Math.random() * -10000), title: "", ratings: [
          {
            id: Math.floor(Math.random() * -10000),
            text: "",
            value: 1,
          },
          {
            id: Math.floor(Math.random() * -10000),
            text: "",
            value: 2,
          },
          {
            id: Math.floor(Math.random() * -10000),
            text: "",
            value: 3,
          },
          {
            id: Math.floor(Math.random() * -10000),
            text: "",
            value: 4,
          },
          {
            id: Math.floor(Math.random() * -10000),
            text: "",
            value: 5,
          },
        ]
      })}>Add Question</Button>
    </Stack>
  )
}
export default QuestionView;