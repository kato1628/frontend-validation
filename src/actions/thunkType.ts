import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AppAction } from "./actions";
import { AppState } from "../reducers";

export type AppThunkAction<R, E = undefined> = ThunkAction<
  R,
  AppState,
  E,
  AppAction
>;

export type AppThunkDispatch<E = undefined> = ThunkDispatch<
  AppState,
  E,
  AppAction
>;
