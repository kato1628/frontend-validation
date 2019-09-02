import { connect } from "react-redux";
import App from "../components/App";
import { AppState } from "../reducers";
import { AppThunkDispatch } from "../actions/thunkType";
import { updateEmail } from "../actions/actions";

const mapStateToProps = (state: AppState) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch: AppThunkDispatch) => ({
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(updateEmail(event.target.value))
});

export type AppPropsMappedFromState = ReturnType<typeof mapStateToProps>;
export type AppPropsMappedFromDispatch = ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
