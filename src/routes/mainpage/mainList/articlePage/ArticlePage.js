import React, { Component } from "react";
import { connect } from "react-redux";

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';

//import components
import VideoPlayer from "../../../../components/VideoComponent/VideoPlayer";

const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
    },
    media: {
        height: 140,
    },
});

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);



function ArticlePage(props){
    const classes = useStyles();

        const { location, mainState } = props;
        const { title, description, date } = location.state;
        return (
            <React.Fragment>
                <Card className={classes.root}>
                    <CardActionArea>
                        <VideoPlayer
                            url="https://v.stayqrious.info/public/Sounddemo.mp4"
                            activities={[
                                {
                                    pausePoint: 230000,
                                    activity: "SoundDemoDrum"
                                },
                                {
                                    pausePoint: 412200,
                                    activity: "SoundDemoHandSlinky"
                                }
                            ]}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                                <StyledRating
                                    style={{float: "right"}}
                                    name="customized-color"
                                    defaultValue={2}
                                    getLabelText={value => `${value} Heart${value !== 1 ? 's' : ''}`}
                                    precision={0.5}
                                    icon={<FavoriteIcon fontSize="inherit" />}
                                />
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </React.Fragment>
        );
};

const mapStateToProps = ({ mainState }) => {
    return { mainState };
};

export default connect(
    mapStateToProps,
    {

    }
)(ArticlePage);