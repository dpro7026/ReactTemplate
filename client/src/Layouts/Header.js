import React from "react";
import { AppBar, Typography, IconButton, makeStyles } from "@material-ui/core";
// import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

export default function Header() {
    const classes = useStyles();
    return(
        <AppBar>
            <Typography component="h1" variant="h5" color="inherit">
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                Exercise Videos
            </Typography>
        </AppBar>
    );
}