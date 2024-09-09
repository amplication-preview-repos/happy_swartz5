import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProxiesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ipAddress" source="ipAddress" />
        <TextInput label="port" source="port" />
        <TextInput label="proxyAddress" source="proxyAddress" />
        <TextInput label="proxyLogin" source="proxyLogin" />
        <TextInput label="proxyPassword" source="proxyPassword" />
        <NumberInput step={1} label="proxyPort" source="proxyPort" />
        <TextInput label="proxyType" source="proxyType" />
      </SimpleForm>
    </Create>
  );
};
