import React from "react";
import { Redirect } from "expo-router";

import { useAuthActions } from "../store/hooks/useAuthActions";

interface UserAuthProps {
  children: JSX.Element;
}

export default function UserAuthGuard({ children }: UserAuthProps) {
  const { user } = useAuthActions();

  if (!user.id) return <Redirect href={"/login"} />;
  return <>{children}</>;
}
