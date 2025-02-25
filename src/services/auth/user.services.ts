import axios from "axios";
import { userMapper } from "./user.mapper";

import storage from '@utils/storage';
import { UserLogin } from "@interfaces";

const URL_BASE = process.env.EXPO_PUBLIC_API_URL;
const ENDPOINTS = {
  login: "/auth/login",
  refreshToken: "/auth/token",
}

const login = async ({ email, password }: UserLogin) => {
  try {
    const { data } = await axios.post(URL_BASE + ENDPOINTS.login, { email, password });
    const user = userMapper(data.data);
    storage.setItem({ key: "token", value: user.token });
    return user;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const loginWithToken = async (token: string) => {
  try {
    const { data } = await axios.post(
      URL_BASE + ENDPOINTS.refreshToken,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return userMapper(data.data);
  } catch (e) {
    console.log(e);
    return null;
  }
};

export default {
  login,
  loginWithToken,
}