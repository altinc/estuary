import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { MESSAGE_TITLE_FIELD } from "../message/MessageTitle";
import { ROUTE_TITLE_FIELD } from "../route/RouteTitle";

export const AttachmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Body" source="body" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Folder" source="folder" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Message" source="message.id" reference="Message">
          <TextField source={MESSAGE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Party" source="party" />
        <ReferenceField label="Route" source="route.id" reference="Route">
          <TextField source={ROUTE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
