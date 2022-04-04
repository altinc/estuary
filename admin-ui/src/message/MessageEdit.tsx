import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { RouteTitle } from "../route/RouteTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Body" multiline source="body" />
        <TextInput label="ContentType" source="contentType" />
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
        <TextInput label="Party" multiline source="party" />
        <ReferenceInput source="route.id" reference="Route" label="Route">
          <SelectInput optionText={RouteTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
