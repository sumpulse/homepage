import React from "react";
import { createUseStyles } from "react-jss";
import Menu from "./Menu";

// @ts-ignore
import logo from "../../images/logo.png";

const headerFontSize = 24;
const logoSize = headerFontSize * 2;

const useStyles = createUseStyles({
  brand: {
    width: 180,
  },
  logo: {
    width: logoSize,
    marginRight: 8,
    marginBottom: -5,
  },
  header: {
    paddingLeft: 10,
    fontSize: headerFontSize,
    fontWeight: 300,
    letterSpacing: -0.5,
    display: "flex",
    alignItems: "center",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logo} />
      <div className={classes.brand}>
        <span>
          <b>s</b>umpulse<b>s</b>ounds
        </span>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
