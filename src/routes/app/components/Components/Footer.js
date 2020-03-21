import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2" style={{color: 'white'}} align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    footer: {
        height: "50px",
        backgroundColor: "red",
        padding: theme.spacing(0.5, 0),
        bottom:0,
        width:"100%",
        position: 'fixed',
    },
}));

export default function Footer(props) {
    const classes = useStyles();
    const { description, title } = props;

    return (
        <footer style={{opacity:1}} className={classes.footer}>
            <Container style={{bottom: 0}} maxWidth="lg">
                <Copyright />
            </Container>
        </footer>
    );
}

Footer.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};
