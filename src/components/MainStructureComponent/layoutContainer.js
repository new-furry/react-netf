import React, {Fragment} from "react";
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';

function renderPage(props) {
    const { children } = props;
    return (
        <div>{children}</div>
    );
}

function VerticalContainer(props) {

    return (
        <Fragment>
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
