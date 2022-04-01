import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { AttachmentTitle } from "../attachment/AttachmentTitle";
import { RouteTitle } from "../route/RouteTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="attachments"
          reference="Attachment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttachmentTitle} />
        </ReferenceArrayInput>
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
