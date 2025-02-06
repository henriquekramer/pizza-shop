import { Helmet } from "react-helmet-async";
import { Fragment } from "react";

export function Dashboard() {
  return (
    <Fragment>
      <Helmet title="Dashboard" />
      <h1>Dashboard</h1>
    </Fragment>
  );
}
