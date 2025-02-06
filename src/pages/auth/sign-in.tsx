import { Helmet } from "react-helmet-async";
import { Fragment } from "react";

export function SignIn() {
  return (
    <Fragment>
      <Helmet title="Login" />
      <h1>Sign-in</h1>
    </Fragment>
  );
}
