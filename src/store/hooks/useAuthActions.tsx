import { useDispatch, useSelector } from "react-redux";

import { loginAction, logoutAction } from "../actions/authActions";
import { RootState } from "../store";

export const useAuthActions = () => {
  const { user, token } = useSelector((store: RootState) => store.authReducer);
  const dispatch = useDispatch();

  const login = (data: any) => dispatch(loginAction(data));
  const logout = () => dispatch(logoutAction());

  return { user, token, login, logout };
};
