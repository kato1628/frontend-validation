import { Email } from "../reducers/email";

export enum AppActionTypes {
  UPDATE_EMAIL = "UPDATE_EMAIL"
}

export const updateEmail = (email: Email) => ({
  type: AppActionTypes.UPDATE_EMAIL as const,
  email
});

export type AppAction = ReturnType<typeof updateEmail>;
