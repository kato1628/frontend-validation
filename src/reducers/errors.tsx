import { AppAction, AppActionTypes } from "../actions/actions";

export type ValidateStates = "email";
type ErrorMessage = string;

export type Errors = { [key in ValidateStates]?: ErrorMessage };

const initialErrors: Errors = {};

export const errors = (state = initialErrors, action: AppAction): Errors => {
  switch (action.type) {
    default:
      return state;
  }
};
