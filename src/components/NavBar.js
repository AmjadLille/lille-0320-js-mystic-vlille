import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import ScrollDialog from "./DialogBox";
import SearchIcon from "@material-ui/icons/Search";
import SwitchButton from "@material-ui/core/Switch";
import Toolbar from "@material-ui/core/Toolbar";
import useStyles from "./UseStyles";

const NavBar = () => {
  const [active, setActive] = useState(true);
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              V'Lille App
            </Typography>
            <ScrollDialog />
            {active ? (
              <Link to="/list">
                <SwitchButton
                  checked={active}
                  onClick={() => setActive(!active)}
                />
              </Link>
            ) : (
              <Link to="/">
                <SwitchButton
                  checked={active}
                  onClick={() => setActive(!active)}
                />
              </Link>
            )}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default NavBar;
