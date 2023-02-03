import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";
import LoginForm from "../../components/auth/LoginForm";

const SignInPage = () => {
  const { status, data } = useSession();
  useEffect(() => {
    if (status === "authenticated") Router.replace("/");
  }, [status]);
  return <LoginForm />;
};

export default SignInPage;
