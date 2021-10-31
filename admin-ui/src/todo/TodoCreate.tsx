import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const TodoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "IN_PROGRESS", value: "InProgress" },
            { label: "DONE", value: "Done" },
            { label: "TODO", value: "Todo" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
