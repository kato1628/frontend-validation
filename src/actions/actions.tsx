import { Email } from "../reducers/email";
import { ValidateStates, Errors } from "../reducers/errors";

export enum AppActionTypes {
  UPDATE_EMAIL = "UPDATE_EMAIL",
  VALIDATION_SUCCESS = "VALIDATION_SUCCESS",
  VALIDATION_FAILURE = "VALIDATION_FAILURE"
}

export const updateEmail = (email: Email) => ({
  type: AppActionTypes.UPDATE_EMAIL as const,
  email
});

export const validationSuccess = (key: ValidateStates) => ({
  type: AppActionTypes.VALIDATION_SUCCESS as const,
  key
});

export const validationFailure = (errors: Errors) => ({
  type: AppActionTypes.VALIDATION_FAILURE as const,
  errors
});

export type AppAction =
  | ReturnType<typeof updateEmail>
  | ReturnType<typeof validationSuccess>
  | ReturnType<typeof validationFailure>;
