import { AppAction, AppActionTypes } from "../actions/actions";

export type ValidateStates = "email";
type ErrorMessage = string;

export type Errors = { [key in ValidateStates]?: ErrorMessage };

const initialErrors: Errors = {};

export const errors = (state = initialErrors, action: AppAction): Errors => {
  switch (action.type) {
    case AppActionTypes.VALIDATION_FAILURE:
      return {
        ...state,
        ...action.errors
      };
    case AppActionTypes.VALIDATION_SUCCESS:
      const nextState = { ...state };
      delete nextState[action.key];
      return nextState;
    default:
      return state;
  }
};
