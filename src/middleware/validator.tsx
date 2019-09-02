import { Dispatch, MiddlewareAPI } from "redux";
import { isEmpty } from "validator";
import {
  validationSuccess,
  validationFailure,
  AppAction,
  AppActionTypes
} from "../actions/actions";
import { AppThunkAction, AppThunkDispatch } from "../actions/thunkType";

const appValidator = ({
  dispatch,
  getState
}: MiddlewareAPI<AppThunkDispatch>) => (next: Dispatch) => (
  action: AppAction
) => {
  switch (action.type) {
    case AppActionTypes.UPDATE_EMAIL:
      dispatch(validateEmail(action.email));
      break;
    default:
      break;
  }
  return next(action);
};

const validateEmail = (email: string): AppThunkAction<void> => dispatch => {
  let errorMessage: string = "";
  if (isEmpty(email)) {
    errorMessage = "Email is required.";
  }
  if (errorMessage === "") {
    dispatch(validationSuccess("email"));
  } else {
    dispatch(validationFailure({ email: errorMessage }));
  }
};

export default appValidator;
