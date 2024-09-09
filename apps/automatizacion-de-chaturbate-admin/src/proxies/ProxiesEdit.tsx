import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProxiesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ipAddress" source="ipAddress" />
        <TextInput label="port" source="port" />
        <TextInput label="proxyAddress" source="proxyAddress" />
        <TextInput label="proxyLogin" source="proxyLogin" />
        <TextInput label="proxyPassword" source="proxyPassword" />
        <NumberInput step={1} label="proxyPort" source="proxyPort" />
        <TextInput label="proxyType" source="proxyType" />
      </SimpleForm>
    </Edit>
  );
};
