import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const RecaptchasCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="isSuccess" source="isSuccess" />
        <TextInput label="response" source="response" />
        <TextInput label="siteKey" source="siteKey" />
      </SimpleForm>
    </Create>
  );
};
