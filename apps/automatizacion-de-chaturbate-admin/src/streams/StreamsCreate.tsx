import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CommentsTitle } from "../comments/CommentsTitle";
import { LikesTitle } from "../likes/LikesTitle";

export const StreamsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="commentsItems"
          reference="Comments"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentsTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="likesItems"
          reference="Likes"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LikesTitle} />
        </ReferenceArrayInput>
        <TextInput label="streamKey" source="streamKey" />
        <TextInput label="streamURL" source="streamUrl" />
      </SimpleForm>
    </Create>
  );
};
