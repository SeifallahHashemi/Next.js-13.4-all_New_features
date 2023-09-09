import {
  RegisterLink,
  LoginLink,
  LogoutLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";

const Navigation = () => {
  const { isAuthenticated } = getKindeServerSession();
  return (
    <div className={"flex justify-center items-center space-x-10"}>
      {isAuthenticated() ? (
        <LogoutLink>Log out</LogoutLink>
      ) : (
        <>
          <LoginLink orgCode={"org_2db32818cb1"}>Sign in</LoginLink>
          <RegisterLink orgCode={"org_2db32818cb1"}>Sign up</RegisterLink>
        </>
      )}
    </div>
  );
};

export default Navigation;
