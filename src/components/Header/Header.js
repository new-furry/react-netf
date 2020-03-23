import React, {Fragment} from 'react';
import { AppBar } from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';

//import logo
import logo from "../../assets/img/logo.jpg";

export const Header = (props) => {
    const { goTargetPage } = props;
    return (
        <Fragment>
            <AppBar position="static" style={{backgroundColor: "white"}}>
                <Toolbar variant="dense">
                    <img onClick={goTargetPage} style={{width: "150px", cursor: 'pointer'}} src={logo} alt="logo"/>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
};
