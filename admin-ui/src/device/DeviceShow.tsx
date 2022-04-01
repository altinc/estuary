import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DEVICE_TITLE_FIELD } from "./DeviceTitle";
import { ROUTE_TITLE_FIELD } from "../route/RouteTitle";

export const DeviceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AppId" source="appId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DeviceToken" source="deviceToken" />
        <TextField label="ID" source="id" />
        <TextField label="Selector" source="selector" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="User" target="DeviceId" label="Users">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Device"
              source="device.id"
              reference="Device"
            >
              <TextField source={DEVICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Roles" source="roles" />
            <ReferenceField label="Route" source="route.id" reference="Route">
              <TextField source={ROUTE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
