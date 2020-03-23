import React, {Fragment} from "react";
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

//import actions
import { saveRating } from "../../../../redux/mainReducer";

const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        marginTop: "30px"
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

    const goBack = () => {
      props.history.push('/app/main');
    };

    const callSaveAction = (event, value) => {
        props.saveRating(value);
    };

        const { location } = props;
        const { title, description, video } = location.state;
        const { rating } = props.mainState.mainState;
        return (
            <Fragment>
                <Card className={classes.root}>
                    <CardActionArea>
                        <VideoPlayer
                            url={video}
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
                                    defaultValue={rating}
                                    getLabelText={value => `${value} Heart${value !== 1 ? 's' : ''}`}
                                    precision={0.5}
                                    onChange={(event, value) => callSaveAction(event, value)}
                                    icon={<FavoriteIcon fontSize="inherit" />}
                                />
                            </Typography>
                            <Typography style={{marginTop: '20px', marginBottom: '20px'}} variant="body2" color="textSecondary" component="p">
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={goBack}
                                variant="contained" style={{backgroundColor: "red", color: "white", marginLeft: '2%'}} disableElevation>
                            Go Back
                        </Button>
                    </CardActions>
                </Card>
            </Fragment>
        );
};

const mapStateToProps = ({ mainState }) => {
    return { mainState };
};

export default connect(
    mapStateToProps,
    {
        saveRating
    }
)(ArticlePage);
