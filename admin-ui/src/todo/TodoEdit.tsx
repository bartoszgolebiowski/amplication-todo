import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const TodoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
