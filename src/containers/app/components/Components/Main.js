import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const Main = (props) => {
    const { title } = props;

    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom>
                {title}
            </Typography>
        </Grid>
    );
}

Main.propTypes = {
    posts: PropTypes.array,
    title: PropTypes.string,
};
