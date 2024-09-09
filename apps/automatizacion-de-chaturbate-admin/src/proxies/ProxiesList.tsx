import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProxiesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProxiesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
