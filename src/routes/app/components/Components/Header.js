import React from 'react';
import { NavLink, BrowserRouter, Link, HashRouter, Route } from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';

//import component
import navLinks from "../../../../services/_sidebarLinks";

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
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));

export default function Header(props) {
    const classes = useStyles();
    const { location, title } = props;

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <Button color="primary" size="small">Subscribe</Button>
                <Typography
                    component="h2"
                    variant="h3"
                    color="primary"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    {title}
                </Typography>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Button color="primary" variant="outlined" size="small">
                    Sign up
                </Button>
            </Toolbar>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {navLinks.map(links => (
                    <NavLink
                        color="primary"
                        key={links.url}
                        to={links.url}
                        // href="#"
                        style={{textDecoration:"none"}}
                        className={classes.toolbarLink}
                    >
                        <h3>{links.name}</h3>
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