import { Box, Button, Stack, TextField } from "@mui/material";
import Form from "./models/Form";
import Group from "./models/Group";
import { useFieldArray, useForm } from "react-hook-form";
import CategoryView from "./CategoryView";
import { BaseSyntheticEvent } from "react";

export type FormViewData = {
  groups: Group[];
}

interface FormProps {
  form: Form;
}

function FormView({ form }: FormProps) {
  const { register, handleSubmit, control } = useForm<FormViewData>({
    defaultValues: {
      groups: form.groups,
    },
  });

  const { fields: groups, append: addGroup, remove: removeGroup } = useFieldArray({
    control,
    name: "groups",
  })

  const onSubmit = (data: FormViewData, event: BaseSyntheticEvent) => {
    event.preventDefault();
    console.log(JSON.stringify(data, null, 2));
  }

  return (
    <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
      <Stack padding={"2rem"} spacing={"2rem"}>
        {groups.map((group, groupIndex) => (
          <Stack key={groupIndex}>
            <TextField {...register(`groups.${groupIndex}.title`)} label="Group Title" />
            <CategoryView control={control} groupIndex={groupIndex} register={register} />
            <Button onClick={() => removeGroup(groupIndex)}>Remove Group</Button>
          </Stack>
        ))}
        <Button onClick={() => addGroup({ id: Math.floor(Math.random() * -10000), title: "", categories: [] })}>Add group</Button>
        <Button type="submit">Submit</Button>
      </Stack>
    </Box>
  )
}
export default FormView;