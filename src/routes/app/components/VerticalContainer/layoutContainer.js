import React from "react";
import {Route, withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './../Components/Header';
import MainFeaturedPost from './../Components/MainFeaturedPost';
import Footer from './../Components/Footer';

function renderPage(props) {
    const { children } = props;
    return (
        <div>{children}</div>
    );
}

const useStyles = makeStyles(theme => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

function VerticalContainer(props) {
    const { location, history } = props;

    const classes = useStyles();

    const mainFeaturedPost = {
        title: 'Paulo Test React Project Like Netflex',
        description:
            "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
        image: 'https://source.unsplash.com/random',
        imgText: 'main image description',
        linkText: 'Continue reading…',
    };

    return (
        <React.Fragment>
            <CssBaseline />
                <Header title="Paulo" />
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
