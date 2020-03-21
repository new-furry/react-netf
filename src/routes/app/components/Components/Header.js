import React from 'react';
import { NavLink, BrowserRouter, Link, HashRouter, Route } from "react-router-dom";
import PropTypes from 'prop-types';
import { AppBar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/core/MenuItem';

//import component
import navLinks from "../../../../services/_sidebarLinks";

//import logo
import logo from "../../../../assets/img/logo.png";

const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
        margin: '2% 5%',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header(props) {
    const classes = useStyles();
    const { location, title } = props;

    return (
        <React.Fragment>
            <AppBar position="static" style={{backgroundColor: "white"}}>
                <Toolbar variant="dense">
                    {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
                        <img style={{width: "100px"}} src={logo} alt="logo"/>
                    {/*</IconButton>*/}
                    <Typography variant="h5" className={classes.title} style={{color: "red"}}>
                        Future!
                    </Typography>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        // onClick={handleMenu}
                        color="primary"
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {navLinks.map(links => (
                    <NavLink
                        // color="primary"
                        key={links.url}
                        to={links.url}
                        style={{textDecoration:"none"}}
                        className={classes.toolbarLink}
                    >
                        <h3 style={{color: "red"}}>{links.name}</h3>
                    </NavLink>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};
