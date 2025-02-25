import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

import "../../global.css";
import storage from "@utils/storage";
import AuthServices from "@services/auth/user.services";
import { useAuthActions } from "@store/hooks/useAuthActions";
import Loading from "@components/loading/Loading";

export default function index() {
  const [appIsReady, setAppIsReady] = useState(false);
  const { login } = useAuthActions();

  useEffect(() => {
    storage.getItem("token").then((token) => {
      if (token) {
        AuthServices.loginWithToken(token)
          .then((data) => {
            if (data) login(data);
          })
          .finally(() => {
            setAppIsReady(true);
          });
      } else {
        setAppIsReady(true);
      }
    });
  }, []);

  if (!appIsReady) {
   return (<Loading></Loading>);
  }

  return <Redirect href="/(home)/" />;
}