import email from "./email";
import { combineReducers, Reducer, Action } from "redux";

const reducer = combineReducers({
  email
});

export default reducer;

type StateType<T> = T extends Reducer<infer S, Action> ? S : never;

export type AppState = StateType<typeof reducer>;
