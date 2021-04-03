import React, { FC } from "react";
import { Link } from "gatsby";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  menu: {
    flex: "1 1 auto",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  menuLink: {
    color: "white",
    textDecoration: "none",
    outline: "none",
    background:
      "linear-gradient(45deg, rgba(0, 244, 254, 0.5) 0%, rgba(0, 128, 170, 0.4) 16%, black 30%)",
    paddingLeft: 7,
  },
});

const Menu: FC = () => {
  const classes = useStyles();
  return (
    <nav className={classes.menu}>
      <Link to="/" className={classes.menuLink}>
        <b>h</b>ome
      </Link>
      <Link to="/music" className={classes.menuLink}>
        <b>m</b>usic
      </Link>
      <Link to="/about" className={classes.menuLink}>
        <b>a</b>bout
      </Link>
      <Link to="/contact" className={classes.menuLink}>
        <b>c</b>ontact
      </Link>
    </nav>
  );
};

export default Menu;
