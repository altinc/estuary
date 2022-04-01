import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DeviceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Devices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="AppId" source="appId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DeviceToken" source="deviceToken" />
        <TextField label="ID" source="id" />
        <TextField label="Selector" source="selector" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
