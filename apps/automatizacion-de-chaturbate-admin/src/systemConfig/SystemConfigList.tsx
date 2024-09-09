import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SystemConfigList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"System Configs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="defaultTimeout" source="defaultTimeout" />
        <TextField label="ID" source="id" />
        <TextField label="maxUsers" source="maxUsers" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
