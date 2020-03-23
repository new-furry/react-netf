import React, {Fragment} from "react";
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { Header } from "../components/Header/Header";

const HeaderContainer = (props) => {

    const goMain = () => {
        props.history.push('/app/main');
    };

    return (
        <Fragment>
            <Header title="Paulo" goTargetPage={() => goMain()} />
        </Fragment>
    );
};

export default connect(
    null,
    {

    }
)(withRouter(HeaderContainer));
