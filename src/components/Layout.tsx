import React from "react";
import Header from "./Header";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    padding: [[30, 30, 100, 30]],
  },
  container: {
    width: 1080,
    minHeight: "100vh",
    background: "black",
    margin: [[0, "auto"]],
    fontFamily: "Roboto, sans",
    boxShadow: [[0, 0, 3, 0, "rgb(0,0,0,0.5)"]],
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <main className={classes.main}>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
