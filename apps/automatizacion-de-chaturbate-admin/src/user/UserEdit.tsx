import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
  PasswordInput,
  BooleanInput,
} from "react-admin";

import { CommentsTitle } from "../comments/CommentsTitle";
import { LikesTitle } from "../likes/LikesTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="commentsItems"
          reference="Comments"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentsTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="dob" source="dob" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="gender" source="gender" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput
          source="likesItems"
          reference="Likes"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LikesTitle} />
        </ReferenceArrayInput>
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <BooleanInput label="status" source="status" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
