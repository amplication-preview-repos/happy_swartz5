import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const RecaptchasEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="isSuccess" source="isSuccess" />
        <TextInput label="response" source="response" />
        <TextInput label="siteKey" source="siteKey" />
      </SimpleForm>
    </Edit>
  );
};
