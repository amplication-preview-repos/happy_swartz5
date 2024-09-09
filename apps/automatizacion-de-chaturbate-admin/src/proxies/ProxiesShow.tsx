import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ProxiesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="ipAddress" source="ipAddress" />
        <TextField label="port" source="port" />
        <TextField label="proxyAddress" source="proxyAddress" />
        <TextField label="proxyLogin" source="proxyLogin" />
        <TextField label="proxyPassword" source="proxyPassword" />
        <TextField label="proxyPort" source="proxyPort" />
        <TextField label="proxyType" source="proxyType" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
