import React, {Fragment} from "react";
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { Header } from "../components/Header/Header";

function VerticalContainer(props) {

    return (
        <Fragment>
            <Header title="Paulo" loPu={props} />
        </Fragment>
    );
}

export default connect(
    null,
    {

    }
)(withRouter(VerticalContainer));
