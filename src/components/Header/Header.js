import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { AppBar } from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';

//import logo
import logo from "../../assets/img/logo2.jpg";

export const Header = (props) => {

    const goMain = () => {
        props.loPu.history.push('/app/main');
    };

    return (
        <Fragment>
            <AppBar position="static" style={{backgroundColor: "white"}}>
                <Toolbar variant="dense">
                    <img onClick={goMain} style={{width: "150px", cursor: 'pointer'}} src={logo} alt="logo"/>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};
