import React from 'react';
import PropTypes from 'prop-types';
import { AppBar } from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';

//import logo
import logo from "../../../../assets/img/logo2.jpg";

export default function Header(props) {

    const goMain = () => {
        props.loPu.history.push('/app/main');
    };

    return (
        <React.Fragment>
            <AppBar position="static" style={{backgroundColor: "white"}}>
                <Toolbar variant="dense">
                    {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
                        <img onClick={goMain} style={{width: "150px", cursor: 'pointer'}} src={logo} alt="logo"/>
                    {/*</IconButton>*/}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};
