import React from 'react';
import {NavLink, Link, Route, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from "@material-ui/core/Button";
import * as mainHelper from "../../../../helpers/mainURL";

const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        // width: 160,
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
});

function FeaturedPost(props) {
    const classes = useStyles();
    const { post } = props;
    const { id, title, date, description, image, imageText, video } = post;

    const goArticle = (articleTitle) => {
        props.history.push({
            pathname: mainHelper.mainArticlePage(id),
            state: {
                id: id,
                title: post.title,
                description: description,
                date: date,
                video: video
            }
        });
    };

    return (
            <Grid item xs={12} md={4}>
                <Card className={classes.root}>
                    <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
                    <CardHeader
                        title={post.title}
                        subheader="March 22, 2020"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {post.description}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                            <Button onClick={() => goArticle(id, title, description, date, video)}
                                    variant="contained" style={{backgroundColor: "red", color: "white", marginLeft: "3%"}} disableElevation>
                                See More
                            </Button>
                    </CardActions>
                </Card>
            </Grid>
    );
}

FeaturedPost.propTypes = {
    post: PropTypes.object,
};

export default withRouter(FeaturedPost);
