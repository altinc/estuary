import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceInput,
  TextInput,
} from "react-admin";
import { MessageTitle } from "../message/MessageTitle";
import { RouteTitle } from "../route/RouteTitle";

export const AttachmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <SelectInput
          source="folder"
          label="Folder"
          choices={[
            { label: "Inbox", value: "Inbox" },
            { label: "Outbox", value: "Outbox" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="message.id" reference="Message" label="Message">
          <SelectInput optionText={MessageTitle} />
        </ReferenceInput>
        <TextInput label="Party" source="party" />
        <ReferenceInput source="route.id" reference="Route" label="Route">
          <SelectInput optionText={RouteTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
