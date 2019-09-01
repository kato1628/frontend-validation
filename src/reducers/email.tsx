import { AppAction } from "../actions/actions";

export type Email = string;

export const email = (state = "", action: AppAction): Email => {
  switch (action.type) {
    case "UPDATE_EMAIL":
      return action.email;
    default:
      return state;
  }
};
