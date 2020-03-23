import React, {Fragment} from "react";
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import { Header } from "../../../../components/Header/Header";

function renderPage(props) {
    const { children } = props;
    return (
        <div>{children}</div>
    );
}

function VerticalContainer(props) {

    return (
        <Fragment>
            <Header title="Paulo" loPu={props} />
            <Container className="mb-50" maxWidth="lg">
                {renderPage(props)}
            </Container>
        </Fragment>
    );
}

export default connect(
    null,
    {

    }
)(withRouter(VerticalContainer));
