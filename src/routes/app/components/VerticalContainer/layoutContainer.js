import React from "react";
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './../Components/Header';
import Footer from './../Components/Footer';

function renderPage(props) {
    const { children } = props;
    return (
        <div>{children}</div>
    );
}

function VerticalContainer(props) {

    return (
        <React.Fragment>
            <CssBaseline />
                <Header title="Paulo" loPu={props} />
            <Container className="mb-50" maxWidth="lg">
                <main>
                        {renderPage(props)}
                </main>
            </Container>
            <Footer title="Footer" description="Something here to give the footer a purpose!" />
        </React.Fragment>
    );
}

export default connect(
    null,
    {

    }
)(withRouter(VerticalContainer));
