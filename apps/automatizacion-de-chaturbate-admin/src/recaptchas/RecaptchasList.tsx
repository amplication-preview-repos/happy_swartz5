import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const RecaptchasList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RecaptchasItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="isSuccess" source="isSuccess" />
        <TextField label="response" source="response" />
        <TextField label="siteKey" source="siteKey" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
